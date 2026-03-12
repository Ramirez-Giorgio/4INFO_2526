export const avg_age = (l) => {
    const sommaEta = l.reduce((acc, studente) => {return acc + studente.eta}, 0);
    return sommaEta / l.length;
};
