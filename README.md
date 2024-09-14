Hi, I'm Kabil Nivaas. This is the documentation for the given code. Kindly go through it.
### Infollion Component Documentation (Short Version)

This component allows users to create a nested questionnaire with support for "Short Answer" and "True/False" question types. Once submitted, a modal popup displays all the questions.

#### Key Features:
1. **Add Parent/Child Questions**:
   - Users can add parent and nested (child) questions dynamically.
   - Parent questions have an option to add child questions underneath them.

2. **Question Types**:
   - "Short Answer" type: Provides a text input field for short responses.
   - "True/False" type: Displays radio buttons for selecting between true or false.

3. **Deletion**:
   - Any question (parent or child) can be deleted by clicking the "Delete" button.

4. **Submit with Modal Popup**:
   - When the "Submit" button is clicked, a modal popup displays all the questions with their parent-child hierarchy.

#### Main Functions:
1. **`addParentQuestion`**: Adds a new parent question to the list.
2. **`addChildQuestion`**: Adds a child question to a specified parent.
3. **`handleInputChange`**: Updates the text and type of questions as users input data.
4. **`deleteQuestion`**: Removes a specific question (either parent or child).
5. **`handleSubmit`**: Triggers the modal popup when the user submits the questionnaire.

#### Modal Display:
- The modal is displayed using the `react-modal` library, and it shows the full list of questions with their respective types in a structured format.

#### Usage:
- After clicking the "Submit" button, users will see their entered questions in a popup modal.
