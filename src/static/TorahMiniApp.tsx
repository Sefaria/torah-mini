import React, {Component, useEffect, useState} from "react";
import "./TorahMiniApp.css";
import VerseReader from "./VerseReader";
import WordNotes from "./WordNotes";
import DictionaryDisplay from "./DictionaryDisplay";
import VerbChart from "./VerbChart";
import {Verse} from "./model/Verse";

function TorahMiniApp () {

    const [currentVerse, setCurrentVerse] = useState(new Verse("שֹׁפֵךְ֙ דַּ֣ם הָֽאָדָ֔ם בָּֽאָדָ֖ם דָּמ֣וֹ יִשָּׁפֵ֑ךְ כִּ֚י בְּצֶ֣לֶם אֱלֹהִ֔ים עָשָׂ֖ה אֶת־הָאָדָֽם׃"))
    const [currentWord, setCurrentWord] = useState(null)
    const [stickyWord, setStickyWord] = useState(null)

    const returnToStickyWord = () => {
        if (stickyWord) {
            setCurrentWord(stickyWord)
        } else {
            setCurrentWord(null)
        }
    }


    return (<div className="TorahMiniApp">
            <VerseReader verse={currentVerse} currentWord={currentWord} setCurrentWord={setCurrentWord}
            setStickyWord={setStickyWord}></VerseReader>
            <WordNotes></WordNotes>
            <DictionaryDisplay></DictionaryDisplay>
            <VerbChart></VerbChart>
            {currentWord}
        </div>
    )
}

export default TorahMiniApp;