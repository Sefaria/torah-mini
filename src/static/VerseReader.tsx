import React, {Component, useEffect, useState, FC, ReactElement} from "react";
import {Verse, Word} from "./model/Verse";
import "./VerseReader.css";


interface VerseReaderProps {
    verse: Verse
    currentWord: number,
    setStickyWord: any,
    setCurrentWord: any,
    returnToStickyWord: any
}

const VerseReader: FC<VerseReaderProps> = ({verse, currentWord, setStickyWord, setCurrentWord, returnToStickyWord}: VerseReaderProps): ReactElement => {

    const onMouseOver = e => {
        const index = parseInt(e.target.id.split('-')[0])
        setCurrentWord(index)
    }

    const onMouseOut = () => {
        returnToStickyWord()
    }

    const onClick = e => {
        setStickyWord(e.text)
    }

    return (<div dir="rtl"><div>{verse.words
        .map((word, index) => <span key={word.verse_index+"outer"}>
            <span key={word.verse_index} id={word.verse_index+"-verseWord"} className={"verseWord " + (word.verse_index === currentWord ? "highlight" : "")} onMouseOver={onMouseOver}>{word.word}</span><span key={word.verse_index + "space"}> </span></span>)}
    </div>
    <div><textarea dir="ltr"></textarea></div>
    </div>)
}

export default VerseReader;