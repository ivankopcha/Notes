import styled from "styled-components";
import NoteDelete from "./NoteDelete";

const CaptionHandler = ({ index, title, text, onChange, delNote }) => {
  return (
    <div>
      <TitleInput
        value={title}
        onChange={(e) => onChange(index, e.target.value, text)}
      />
      <NoteDelete index={index} onClick={delNote} />
      <CaptionInput
        onChange={(e) => onChange(index, title, e.target.value)}
        defaultValue={text}
      ></CaptionInput>
    </div>
  );
};

const TitleInput = styled.input`
  width: 85%;
  margin-top: 1.2em;
  padding: 0.5em;
  background: none;
  border: 0px;
  outline: none;
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 1.2em;
`;

const CaptionInput = styled.textarea`
  width: 88%;
  height: 250px;
  margin-top: 0.5em;
  outline: none;
  resize: none;
  overflow: auto;
  background: none;
  border: none;
  color: rgba(176, 176, 176, 1);
  padding: 0.5rem;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  scrollbar-color: red;

  
`;

export default CaptionHandler;
