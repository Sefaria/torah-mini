import React, {Component, FC, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";
import {WordNote} from "./model/VerseNotes";


interface DictionaryDisplayProps {
    verse: Verse;
    currentWord: number;
    verseNotes: WordNote[];
    setCurrentWord;
}

const DictionaryDisplay: FC<DictionaryDisplayProps> = ({verse, currentWord, verseNotes, setCurrentWord}: DictionaryDisplayProps): ReactElement => {

    const onMouseOver = e => {
        const index = parseInt(e.target.id.split('-')[0])
        console.log(e.target.id)
        console.log(e.target)
        setCurrentWord(index)
    }

    return <div className="flex-column">
        {verseNotes.map(wordNote => <div key={wordNote.word.verse_index}>
            <span id={wordNote.word.verse_index+"-verseWordTranslation"} onMouseOver={onMouseOver} className={"verseWord" + (wordNote.word.verse_index === currentWord ? " highlight" : "")}>{wordNote.word.word}</span>
            <span className="wordNote"> - {wordNote.notes} </span>
        </div>)
        }
    </div>;
}

export default DictionaryDisplay;