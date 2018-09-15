export const c = (itemToLog, note, title) => {
        title ? console.groupCollapsed(title) : console.groupCollapsed('');
        note ? console.log(itemToLog, note) : console.log(itemToLog);
        console.groupEnd();
}