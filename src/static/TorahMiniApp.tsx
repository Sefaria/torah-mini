import React, {Component, useEffect, useState} from "react";
import "./TorahMiniApp.css";
import VerseReader from "./VerseReader";
import DictionaryDisplay from "./DictionaryDisplay";
import VerbChart from "./VerbChart";
import {Verse} from "./model/Verse";
import {VerseNotes, WordNote} from "./model/VerseNotes";
import WordNotes from "./WordNotes";
import TranslationDisplay from "./TranslationDisplay";

function TorahMiniApp () {

    const [currentVerse, setCurrentVerse] = useState(new Verse("שֹׁפֵךְ֙ דַּ֣ם הָֽאָדָ֔ם בָּֽאָדָ֖ם דָּמ֣וֹ יִשָּׁפֵ֑ךְ כִּ֚י בְּצֶ֣לֶם אֱלֹהִ֔ים עָשָׂ֖ה אֶת־הָאָדָֽם׃"))
    const [currentVerseNotes, setCurrentVerseNotes] = useState(currentVerse.words.map(word => new WordNote(word)))
    const [currentWord, setCurrentWord] = useState(0)
    const [stickyWord, setStickyWord] = useState(null)
    const [showTranslation, setShowTranslation] = useState(false)

    // useEffect(() => {
    //     // save
    //     setCurrentVerseNotes(new VerseNotes(currentVerse))
    // }, [currentVerse])

    // const returnToStickyWord = () => {
    //     if (stickyWord) {
    //         setCurrentWord(stickyWord)
    //     } else {
    //         setCurrentWord(null)
    //     }
    // }

    const nextWord = (goBackwards: false) => {
        const wordCount = currentVerse.words.length;
        const increment = goBackwards ? -1 : 1;
        let nextWord = (currentWord + increment) % wordCount
        nextWord = nextWord < 0 ? wordCount + nextWord : nextWord;
        setCurrentWord(nextWord);
    }

    const showTranslateEntireSentence = () => {

    }

    const updateWordNote = (newText, noteIndex) => {
        let currentVerseNotesCopy = [...currentVerseNotes]
        let currentWordNote = {...currentVerseNotesCopy[noteIndex]}
        currentVerseNotesCopy[noteIndex].notes = newText;
        setCurrentVerseNotes(currentVerseNotesCopy)
    }

    return (<div className="TorahMiniApp">
            <div className="flex-column">
                <div className="divider-block"></div>

                Genesis 9:6
            <VerseReader verse={currentVerse} currentWord={currentWord} setCurrentWord={setCurrentWord}
                         setStickyWord={setStickyWord}/>
            {<WordNotes wordNote={currentVerseNotes[currentWord].notes} currentWord={currentWord}
                                      updateWordNote={updateWordNote}  currentVerse={currentVerse}
            nextWord={nextWord}/>}
                <div class="divider-block"></div>
            </div>
            <div className="dict-translation" className="flex">
                <div className="flex">
                    <DictionaryDisplay verse={currentVerse} currentWord={currentWord}/>
                    <VerbChart/>
                </div>
                <div className="flex"><TranslationDisplay setCurrentWord={setCurrentWord} currentWord={currentWord} verse={currentVerse} verseNotes={currentVerseNotes}/></div>
            </div>
            Translate entire sentence:
            <div className="full-translation-container"><textarea dir="ltr"></textarea></div>
            <br/>
                        {!showTranslation ? <button onClick={() => setShowTranslation(true)}>Check Translation</button> :
                <div>Whoever sheds human blood,
By human [hands] shall that one’s blood be shed;
For in the image of God
Was humankind made.
                    <button onClick={() => setShowTranslation(false)}>Hide Translation</button>
</div>
            }
            <div className="divider-block"></div>

        </div>
    )
}

export default TorahMiniApp;