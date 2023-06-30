import React, {Component, FC, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";
import {WordNote} from "./model/VerseNotes";

interface WordNotesProps {
    wordNote: string;
    currentWord: number;
    updateWordNote: any;
    currentVerse: Verse
}

const WordNotes: FC<WordNotesProps> = ({wordNote, currentWord, updateWordNote, currentVerse}: WordNotesProps): ReactElement => {

    const handleChange = e => {
        console.log(e.target.value)
        console.log(currentWord)
        updateWordNote(e.target.value, currentWord);
    }

    return <div>Translate {currentVerse.words[currentWord].word}: <input value={wordNote} onChange={handleChange}></input></div>;
}

export default WordNotes