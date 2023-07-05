import React, {Component, FC, ReactElement, useEffect, useState} from "react";
import {Verse} from "./model/Verse";
import {WordNote} from "./model/VerseNotes";


interface DictionaryDisplayProps {
    verse: Verse
    verseNotes: WordNote[]
}

const DictionaryDisplay: FC<DictionaryDisplayProps> = ({verse, verseNotes}: DictionaryDisplayProps): ReactElement => {
    return <div className="flex-column">
        {verseNotes.map(wordNote => <div>
            <b>{wordNote.word.word}:</b> <span className="wordNote">{wordNote.notes} </span>
        </div>)
        }
    </div>;
}

export default DictionaryDisplay;