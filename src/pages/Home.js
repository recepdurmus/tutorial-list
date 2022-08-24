import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);


  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (id, title, desc) => {
    try {
      await axios.put(`${url}/${id}`, {title, description: desc});
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </div>
  );
};

export default Home;
