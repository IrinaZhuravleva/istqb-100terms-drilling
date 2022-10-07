const clickBtn = document.getElementById('click');

let newArr = [{
    id: "",
    question: 'black-box test technique',
    answer: 'A test technique based on an analysis of the specification of a component or system.'
}, {
    id: "",
    question: 'boundary value analysis',
    answer: 'A black-box test technique in which test cases are designed based on boundary values.'
}, {
    id: "",
    question: 'checklist-based testing',
    answer: 'An experience-based test technique whereby the experienced tester uses a high-level list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product has to be verified.'
}, {
    id: "",
    question: 'coverage',
    answer: 'The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage.'
}, {
    id: "",
    question: 'condition coverage',
    answer: 'The coverage of condition outcomes.'
}, {
    id: "",
    question: 'coverage criteria',
    answer: 'The coverage of condition outcomes.'
}, {
    id: "",
    question: 'coverage item',
    answer: 'An attribute or combination of attributes derived from one or more test conditions by using a test technique.'
}, {
    id: "",
    question: 'decision coverage',
    answer: 'The coverage of decision outcomes.'
}, {
    id: "",
    question: 'decision table testing',
    answer: 'A black-box test technique in which test cases are designed to exercise the combinations of conditions and the resulting actions shown in a decision table.'
}, {
    id: "",
    question: 'defect-based test technique',
    answer: 'A test technique in which test cases are developed from what is known about a specific defect type.'
}, {
    id: "",
    question: 'error guessing',
    answer: 'A test technique in which tests are derived on the basis of the tester \'s knowledge of past failures, or general knowledge of failure modes.'
}, {
    id: "",
    question: 'equivalence partitioning',
    answer: 'A black-box test technique in which test cases are designed to exercise equivalence partitions by using one representative member of each partition.'

}, {
    id: "",
    question: 'experience-based test technique',
    answer: 'A test technique only based on the tester\'s experience, knowledge and intuition.'
}, {
    id: "",
    question: 'exploratory testing',
    answer: 'An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests.'
}, {
    id: "",
    question: 'model coverage',
    answer: ''
}, {
    id: "",
    question: 'modified condition/decision coverage (MC/DC)',
    answer: 'The coverage of all outcomes of the atomic conditions that independently affect the overall decision outcome.'
}, {
    id: "",
    question: 'multiple condition coverage',
    answer: 'The coverage of all possible combinations of all single condition outcomes within one statement.'
}, {
    id: "",
    question: 'model coverage',
    answer: ''
}, {
    id: "",
    question: 'modified condition/decision coverage (MC/DC)',
    answer: 'The coverage of all outcomes of the atomic conditions that independently affect the overall decision outcome.'
}, {
    id: "",
    question: 'multiple condition coverage',
    answer: 'The coverage of all possible combinations of all single condition outcomes within one statement.'
}, {
    id: "",
    question: 'N-switch coverage',
    answer: ''
}, {
    id: "",
    question: 'state transition testing',
    answer: 'A black-box test technique in which test cases are designed to exercise elements of a state transition model.'
}, {
    id: "",
    question: 'statement coverage',
    answer: 'The coverage of executable statements.'

}, {
    id: "",
    question: 'structural coverage',
    answer: 'Coverage measures based on the internal structure of a component or system.'
}, {
    id: "",
    question: 'test technique',
    answer: 'A procedure used to define test conditions, design test cases, and specify test data.'

}, {
    id: "",
    question: 'use case testing',
    answer: 'A black-box test technique in which test cases are designed to exercise use case behaviors.'
}];

clickBtn.addEventListener('click', function () {
    let i = 75;
    newArr.forEach(item => item.id = i++);
    console.log(JSON.stringify(newArr)); //то, что надо
})

// var array = [{
//         "Item": "A",
//         "Quantity": 2
//     },
//     {
//         "Item": "B",
//         "Quantity": 7
//     },
//     {
//         "Item": "C",
//         "Quantity": 1
//     }
// ];
// var result = array.map(function (item) {
//     return "(" + item.Item + "," + item.Quantity + ")"
// }).join(",");
