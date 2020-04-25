import styled from "styled-components";

export const TodoContainer = styled.div`
    text-align: center;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    background-color: #eef2f3;    
    border: 1px solid black;
    border-radius: 10px;   
    padding: 10px;
    margin: 2rem auto;    
`;

export const TodoTextInput = styled.input`
  margin-right: 0.5rem;
  padding: 0.5rem;
  font-size: 1.125rem;
  border: 1px solid gray;    
  border-radius: 5px;
  width: 50%;
  
`;

export const TodoButton = styled.button`
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color: #f9f9f9;
	border-radius:6px;
	border:1px solid gray;
	display:inline-block;
	cursor:pointer;
	color:#1f1b1f;
	font-family:Arial;
	font-size: 1.125rem;
	font-weight:bold;
	padding: 0.5rem;
	text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;       
`;

export const TodoButtonSelect = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  min-width: 50px;
  align-self: center;
  font-size: 1.5rem;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #757F9A;
`;

export const TodoButtonChange = styled.button`	
	background-color: #D7DDE8;
	border-radius:6px;
	border:1px solid gray;
	display:inline-block;
	cursor:pointer;
	color:#1f1b1f;
	font-family:Arial;
	font-size: 1.125rem;
	font-weight:bold;
	padding: 0.5rem;
	text-decoration:none;    
`;

export const TodoButtonErase = styled.button`	
	background-color: #D7DDE8;
	border-radius:6px;
	border:1px solid gray;
	display:inline-block;
	cursor:pointer;
	color:#1f1b1f;
	font-family: Arial;
	font-size: 1.125rem;
	font-weight:bold;
	padding: 0.5rem;
	text-decoration:none;         
`;



