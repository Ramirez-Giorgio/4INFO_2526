export const ordina = (l) => {
    return l.sort((el1,el2) => el2.title.localeCompare(el1.title))
};
