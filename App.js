import React, { useState } from "react";
import "./App.css";

const DynamicForm = () => {
  const [questions, setQuestions] = useState([]);

  // Add a new parent question
  const addParentQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: "",
      type: "Short Answer",
      children: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  // Handle input change for text field and type dropdown
  const handleInputChange = (id, field, value) => {
    const updateQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, [field]: value };
      }
      return question;
    });
    setQuestions(updateQuestions);
  };

  // Add a child question (only if the parent question type is "True/False" and answer is "True")
  const addChildQuestion = (parentId) => {
    const newChild = {
      id: Date.now(),
      text: "",
      type: "Short Answer",
      children: [],
    };
    const updateQuestions = questions.map((question) => {
      if (question.id === parentId) {
        return { ...question, children: [...question.children, newChild] };
      }
      return question;
    });
    setQuestions(updateQuestions);
  };

  // Delete question or child question
  const deleteQuestion = (id) => {
    const removeQuestion = (list) =>
      list.filter((question) => question.id !== id).map((question) => ({
        ...question,
        children: removeQuestion(question.children),
      }));

    setQuestions(removeQuestion(questions));
  };

  // Render questions recursively
  const renderQuestions = (questions, prefix = "Q") => {
    return questions.map((question, index) => {
      const questionNumber = `${prefix}${index + 1}`;
      return (
        <div key={question.id} className="question-block">
          <label>{questionNumber}</label>
          <input
            type="text"
            placeholder="Enter question"
            value={question.text}
            onChange={(e) =>
              handleInputChange(question.id, "text", e.target.value)
            }
          />
          <select
            value={question.type}
            onChange={(e) =>
              handleInputChange(question.id, "type", e.target.value)
            }
          >
            <option value="Short Answer">Short Answer</option>
            <option value="True/False">True/False</option>
          </select>
          <button onClick={() => deleteQuestion(question.id)}>Delete</button>
          {question.type === "True/False" && (
            <button onClick={() => addChildQuestion(question.id)}>
              Add Child Question
            </button>
          )}
          <div className="children">
            {renderQuestions(question.children, `${questionNumber}.`)}
          </div>
        </div>
      );
    });
  };

  // Display the final hierarchical view on submission
  const handleSubmit = () => {
    console.log("Questions:", questions);
    alert(JSON.stringify(questions, null, 2));
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <button onClick={addParentQuestion}>Add New Question</button>
      <div className="form">
        {renderQuestions(questions)}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DynamicForm;