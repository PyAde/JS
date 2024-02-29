// Penulisan unit test untuk kode averageExamns sebagai berikut

const {averageExamns} = require('../Testing/Tes');

test('it should return exact average', () => {
    const listValueofExams = [80, 100, 100, 80];
    expect(averageExamns(listValueofExams)).toEqual(90);
})