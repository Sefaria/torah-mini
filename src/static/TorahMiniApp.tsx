import React, {Component, useEffect, useState} from "react";
import "./TorahMiniApp.css";
import VerseReader from "./VerseReader";
import WordNotes from "./WordNotes";
import DictionaryDisplay from "./DictionaryDisplay";
import VerbChart from "./VerbChart";

function TorahMiniApp () {
    const [currentVerse, setCurrentVerse] = useState("שֹׁפֵךְ֙ דַּ֣ם הָֽאָדָ֔ם בָּֽאָדָ֖ם דָּמ֣וֹ יִשָּׁפֵ֑ךְ כִּ֚י בְּצֶ֣לֶם אֱלֹהִ֔ים עָשָׂ֖ה אֶת־הָאָדָֽם׃")
    const [currentWord, setCurrentWord] = useState({})
    return (<div className="TorahMiniApp">
            hi
            <VerseReader></VerseReader>
            <WordNotes></WordNotes>
            <DictionaryDisplay></DictionaryDisplay>
            <VerbChart></VerbChart>
        </div>
    )
}

export default TorahMiniApp;