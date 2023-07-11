import React, {Component, FC, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";
import {WordNote} from "./model/VerseNotes";
import "./WordNotes.css"

interface WordNotesProps {
    wordNote: string;
    currentWord: number;
    updateWordNote: any;
    currentVerse: Verse
    nextWord: any;
}

const WordNotes: FC<WordNotesProps> = ({wordNote, currentWord, updateWordNote, currentVerse, nextWord}: WordNotesProps): ReactElement => {

    const handleChange = e => {
        updateWordNote(e.target.value, currentWord);
    }

    const onKeyDown = e => {
        if (e.shiftKey && (e.keyCode == 13 || e.keyCode == 9)) {
            e.preventDefault()
            nextWord(true);
        }
        else if (e.keyCode === 13 || e.keyCode === 9) {
            e.preventDefault()
            nextWord()
        }
    }

    return <div>
        Write the definition for: {currentVerse.words[currentWord].word}: <input value={wordNote}
                                                                                 onChange={handleChange}
    onKeyDown={onKeyDown}/>
        <div className="small-accent">
        Press "Enter" to navigate to the next word.
        <br/>
        Press "Shift"+"Enter" navigate to the previous word.
        </div>
    </div>;
}

export default WordNotes