import styled from "styled-components";

export const DivEtiqueta = styled.div `
    font-family: Arial, Helvetica, sans-serif;

    form {
        width: 400px;
        margin: 10px auto;
        color: white;
        background-color: blueviolet;
        border-radius: 5px;
    }

    fieldset {
        padding: 20px;
        border-radius: 5px;
    }

    legend {
        font-size: 20px;
        text-align: center;
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    input {
        padding: 5px;
        border-radius: 5px;
        border: none;
        outline-color: darkgray;
    }

    button {
        padding: 5px 20px;
        border-radius: 5px;
        border: none;
        background-color: lightgreen;
    }

    .painel {
        width: 90%;
        border: 5px solid #509;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: auto;
    }

    .etiqueta {
        padding: 10px;
        border: 5px solid #509;
        width: 300px;
        margin: 10px;
        background-color: #a5f;
        border-radius: 5px;
    }
`