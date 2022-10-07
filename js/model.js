let tralivali;

const base = [{
        id: 1,
        answer: "coverage",
        question: "The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage."
    }, {
        id: 2,
        answer: "debugging",
        question: "The process of finding, analyzing and removing the causes of failures in a component or system."
    }, {
        id: 3,
        answer: "defect (bug, fault)",
        question: "An imperfection or deficiency in a work product where it does not meet its requirements or specifications."
    }, {
        id: 4,
        answer: "error",
        question: "A human action that produces an incorrect result."
    }, {
        id: 5,
        answer: "failure",
        question: "An event in which a component or system does not perform a required function within specified limits."
    }, {
        id: 6,
        answer: "quality",
        question: "The degree to which a component or system satisfies the stated and implied needs of its various stakeholders."
    }, {
        id: 7,
        answer: "quality assurance",
        question: "Activities focused on providing confidence that quality requirements will be fulfilled."
    }, {
        id: 8,
        answer: "root cause",
        question: "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed."
    }, {
        id: 9,
        answer: "test analysis",
        question: "The activity that identifies test conditions by analyzing the test basis."
    }, {
        id: 10,
        answer: "test basis",
        question: "The body of knowledge used as the basis for test analysis and design."
    }, {
        id: 11,
        answer: "test case",
        question: "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions."
    }, {
        id: 12,
        answer: "test completion",
        question: "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders."
    }, {
        id: 13,
        answer: "test condition",
        question: "A testable aspect of a component or system identified as a basis for testing."
    }, {
        id: 14,
        answer: "test control",
        question: "The activity that develops and applies corrective actions to get a test project on track when it deviates from what was planned."
    }, {
        id: 15,
        answer: "test data",
        question: "Data needed for test execution."
    }, {
        id: 16,
        answer: "test design",
        question: "The activity that derives and specifies test cases from test conditions."
    }, {
        id: 17,
        answer: "test execution",
        question: "The activity that runs a test on a component or system producing actual results."
    }, {
        id: 18,
        answer: "test execution schedule",
        question: "A schedule for the execution of test suites within a test cycle."
    }, {
        id: 19,
        answer: "test implementation",
        question: "The activity that prepares the testware needed for test execution based on test analysis and design."
    }, {
        id: 20,
        answer: "test monitoring",
        question: "The activity that checks the status of testing activities, identifies any variances from planned or expected, and reports status to stakeholders."
    }, {
        id: 21,
        answer: "test object",
        question: "The work product to be tested."
    }, {
        id: 22,
        answer: "test objective",
        question: "The reason or purpose of testing."
    }, {
        id: 23,
        answer: "test oracle",
        question: "A source to determine an expected result to compare with the actual result of the system under test."
    }, {
        id: 24,
        answer: "test planning",
        question: "The activity of establishing or updating a test plan."
    }, {
        id: 25,
        answer: "test procedure",
        question: "A sequence of test cases in execution order, and any associated actions that may be required to set up the initial preconditions and any wrap up activities post execution."
    }, {
        id: 26,
        answer: "test suite",
        question: "A set of test scripts or test procedures to be executed in a specific test run."
    }, {
        id: 27,
        answer: "testing",
        question: "The process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects."
    }, {
        id: 28,
        answer: "testware",
        question: "Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing."
    }, {
        id: 29,
        answer: "traceability",
        question: "The degree to which a relationship can be established between two or more work products."
    }, {
        id: 30,
        answer: "validation",
        question: "Confirmation by examination and through provision of objective evidence that the requirements for a specific intended use or application have been fulfilled."
    }, {
        id: 31,
        answer: "verification",
        question: "Confirmation by examination and through provision of objective evidence that specified requirements have been fulfilled."
    }, {
        id: 32,
        answer: "acceptance testing",
        question: "A test level that focuses on determining whether to accept the system."
    }, {
        id: 33,
        answer: "alpha testing",
        question: "A type of acceptance testing performed in the developer's test environment by roles outside the development organization."
    }, {
        id: 34,
        answer: "beta testing",
        question: "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization."
    }, {
        id: 35,
        answer: "commercial off-the-shelf (COTS)",
        question: "A type of product developed in an identical format for a large number of customers in the general market."
    }, {
        id: 36,
        answer: "component integration testing",
        question: "Testing in which the test items are interfaces and interactions between integrated components."
    }, {
        id: 37,
        answer: "component (module, unit) testing",
        question: "A test level that focuses on individual hardware or software components."
    }, {
        id: 38,
        answer: "confirmation testing",
        question: "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur."
    }, {
        id: 39,
        answer: "contractual acceptance testing",
        question: "A type of acceptance testing performed to verify whether a system satisfies its contractual requirements."
    }, {
        id: 40,
        answer: "functional testing",
        question: "Testing performed to evaluate if a component or system satisfies functional requirements."
    }, {
        id: 41,
        answer: "impact analysis",
        question: "The identification of all work products affected by a change, including an estimate of the resources needed to accomplish the change."
    }, {
        id: 42,
        answer: "exit criteria",
        question: "The set of conditions for officially completing a defined task."
    }, {
        id: 43,
        answer: "integration testing",
        question: "A test level that focuses on interactions between components or systems."
    }, {
        id: 44,
        answer: "maintenance testing",
        question: "Testing the changes to an operational system or the impact of a changed environment to an operational system."
    }, {
        id: 45,
        answer: "non-functional testing",
        question: "Testing performed to evaluate that a component or system complies with non-functional requirements."
    }
    , {
        id: 46,
        answer: "operational acceptance testing",
        question: "A type of acceptance testing performed to determine if operations and/or systems administration staff can accept a system."
    }, {
        id: 47,
        answer: "regression testing",
        question: "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software."
    }, {
        id: 48,
        answer: "regulatory acceptance testing",
        question: "A type of acceptance testing performed to verify whether a system conforms to relevant laws, policies and regulations."
    }, {
        id: 49,
        answer: "sequential development model",
        question: "A type of software development lifecycle model in which a complete system is developed in a linear way of several discrete and successive phases with no overlap between them."
    }
    , {
        id: 50,
        answer: "system integration testing",
        question: "A test level that focuses on interactions between systems."
    }, {
        id: 51,
        answer: "system testing",
        question: "A test level that focuses on verifying that a system as a whole meets specified requirements."
    }, {
        id: 52,
        answer: "test basis",
        question: "The body of knowledge used as the basis for test analysis and design."
    }, {
        id: 53,
        answer: "high-level test case",
        question: "A test case with abstract preconditions, input data, expected results, postconditions, and actions (where applicable)."
    }, {
        id: 54,
        answer: "test environment",
        question: "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to conduct a test."
    }, {
        id: 55,
        answer: "test level",
        question: "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions."
    }, {
        id: 56,
        answer: "low-level test case",
        question: "A test case with concrete values for preconditions, input data, expected results, postconditions, and a detailed description of actions (where applicable)."
    }, {
        id: 57,
        answer: "test suite",
        question: "A set of test scripts or test procedures to be executed in a specific test run."
    }, {
        id: 58,
        answer: "test type",
        question: "A group of test activities based on specific test objectives aimed at specific characteristics of a component or system."
    }, {
        id: 59,
        answer: "user acceptance testing",
        question: "A type of acceptance testing performed to determine if intended users accept the system."
    }, {
        id: 60,
        answer: "white-box testing",
        question: "Testing based on an analysis of the internal structure of the component or system."
    },
    {
        "id": 61,
        "answer": "ad hoc reviewing",
        "question": "A review technique performed informally without a structured process."
    }, {
        "id": 62,
        "answer": "checklist-based reviewing",
        "question": "A review technique guided by a list of questions or required attributes."
    }, {
        "id": 63,
        "answer": "dynamic testing",
        "question": "Testing that involves the execution of the test item."
    }, {
        "id": 64,
        "answer": "formal review",
        "question": "A type of review that follows a defined process with a formally documented output."
    }, {
        "id": 65,
        "answer": "informal review",
        "question": "A type of review that does not follow a defined process and has no formally documented output."
    }, {
        "id": 66,
        "answer": "inspection",
        "question": "A type of formal review to identify issues in a work product, which provides measurement to improve the review process and the software development process."
    }, {
        "id": 67,
        "answer": "perspective-based reading",
        "question": "A review technique in which a work product is evaluated from the perspective of different stakeholders with the purpose to derive other work products."
    }, {
        "id": 68,
        "answer": "review",
        "question": "A type of static testing in which a work product or process is evaluated by one or more individuals to detect defects or to provide improvements."
    }, {
        "id": 69,
        "answer": "role-based review",
        "question": "A review technique in which a work product is evaluated from the perspective of different stakeholders."
    }, {
        "id": 70,
        "answer": "scenario-based reviewing",
        "question": "A review technique in which a work product is evaluated to determine its ability to address specific scenarios."
    }, {
        "id": 71,
        "answer": "static analysis",
        "question": "The process of evaluating a component or system without executing it, based on its form, structure, content, or documentation."
    }, {
        "id": 72,
        "answer": "static testing",
        "question": "Testing that does not involve the execution of a test item."
    }, {
        "id": 73,
        "answer": "technical review",
        "question": "A formal review by technical experts that examine the quality of a work product and identify discrepancies from specifications and standards."
    }, {
        "id": 74,
        "answer": "walkthrough",
        "question": "A type of review in which an author leads members of the review through a work product and the members ask questions and make comments about possible issues."
    }, {
        "id": 75, 
        "question": "black-box test technique", 
        "answer": "A test technique based on an analysis of the specification of a component or system."
        }, {
            "id": 76,
            "question": "boundary value analysis",
            "answer": "A black-box test technique in which test cases are designed based on boundary values."
        }, {
            "id": 77,
            "question": "checklist-based testing",
            "answer": "An experience-based test technique whereby the experienced tester uses a high-level list of items to be noted, checked, or remembered, or a set of rules or criteria against which a product has to be verified."
        }, {
            "id": 78,
            "question": "coverage",
            "answer": "The degree to which specified coverage items have been determined or have been exercised by a test suite expressed as a percentage."
        }, {
            "id": 79,
            "question": "condition coverage",
            "answer": "The coverage of condition outcomes."
        }, {
            "id": 80,
            "question": "coverage criteria",
            "answer": "The coverage of condition outcomes."
        }, {
            "id": 81,
            "question": "coverage item",
            "answer": "An attribute or combination of attributes derived from one or more test conditions by using a test technique."
        }, {
            "id": 82,
            "question": "decision coverage",
            "answer": "The coverage of decision outcomes."
        }, {
            "id": 83,
            "question": "decision table testing",
            "answer": "A black-box test technique in which test cases are designed to exercise the combinations of conditions and the resulting actions shown in a decision table."
        }, {
            "id": 84,
            "question": "defect-based test technique",
            "answer": "A test technique in which test cases are developed from what is known about a specific defect type."
        }, {
            "id": 85,
            "question": "error guessing",
            "answer": "A test technique in which tests are derived on the basis of the tester 's knowledge of past failures, or general knowledge of failure modes."
        }, {
            "id": 86,
            "question": "equivalence partitioning",
            "answer": "A black-box test technique in which test cases are designed to exercise equivalence partitions by using one representative member of each partition."
        }, {
            "id": 87,
            "question": "experience-based test technique",
            "answer": "A test technique only based on the tester's experience, knowledge and intuition."
        }, {
            "id": 88,
            "question": "exploratory testing",
            "answer": "An approach to testing whereby the testers dynamically design and execute tests based on their knowledge, exploration of the test item and the results of previous tests."
        }, {
            "id": 89,
            "question": "model coverage",
            "answer": ""
        }, {
            "id": 90,
            "question": "modified condition/decision coverage (MC/DC)",
            "answer": "The coverage of all outcomes of the atomic conditions that independently affect the overall decision outcome."
        }, {
            "id": 91,
            "question": "multiple condition coverage",
            "answer": "The coverage of all possible combinations of all single condition outcomes within one statement."
        }, {
            "id": 92,
            "question": "model coverage",
            "answer": ""
        }, {
            "id": 93,
            "question": "modified condition/decision coverage (MC/DC)",
            "answer": "The coverage of all outcomes of the atomic conditions that independently affect the overall decision outcome."
        }, {
            "id": 94,
            "question": "multiple condition coverage",
            "answer": "The coverage of all possible combinations of all single condition outcomes within one statement."
        }, {
            "id": 95,
            "question": "N-switch coverage",
            "answer": ""
        }, {
            "id": 96,
            "question": "state transition testing",
            "answer": "A black-box test technique in which test cases are designed to exercise elements of a state transition model."
        }, {
            "id": 97,
            "question": "statement coverage",
            "answer": "The coverage of executable statements."
        }, {
            "id": 98,
            "question": "structural coverage",
            "answer": "Coverage measures based on the internal structure of a component or system."
        }, {
            "id": 99,
            "question": "test technique",
            "answer": "A procedure used to define test conditions, design test cases, and specify test data."
        }, {
            "id": 100,
            "question": "use case testing",
            "answer": "A black-box test technique in which test cases are designed to exercise use case behaviors."
    }
];


let data;

data = base;

// if (localStorage.getItem("data") != null) {
//     data = JSON.parse(localStorage.getItem('data'));
        
// } else {
//     data = base;
//     localStorage.setItem('data', JSON.stringify(data));
// }
