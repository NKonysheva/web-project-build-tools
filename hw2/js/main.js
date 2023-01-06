'use strict';

import { diffDates, diffToHtml } from "/js/datecalc.js";
import { formatError } from "/js/utils.js";
import "/js/switcher.js";
import "/js/timer.js";

import bundlerSoundChicken from '../src/assets/sound/chicken.mp3';
import '../style.css';

const dateCalcForm = document.querySelector("#datecalc");
const dateCalcResult = document.querySelector("#datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}