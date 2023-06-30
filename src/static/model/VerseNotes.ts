import {Verse, Word} from "./Verse";

class WordNote {
    word: Word;
    notes: string;

    constructor(word: Word) {
        this.notes = ""
        this.word = word
    }
}

class VerseNotes {
    verseNotes: string
    wordNotes: WordNote[]

    constructor(verse: Verse) {
        this.verseNotes = ""
        this.wordNotes = verse.words.map(word => new WordNote(word))
    }
}

export {VerseNotes, WordNote}