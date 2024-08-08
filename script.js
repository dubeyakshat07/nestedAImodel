const layers = document.querySelectorAll('.layer');
const questionsContainer = document.getElementById('questionsBox');
const methodologyList = document.getElementById('methodologyList');

const questions = {
    1: [
        "Which regulation should be specified for this AI workflow?",
        "Which country has specified this regulation?",
        "Can you list out the key requirements set up by the regulation?",
        "Can you categorize the guidelines into ethical and technical ones?",
        "Who are the stakeholders involved in this AI workflow?"
    ],
    2: [
        "What are the specific requirements within the domain?",
        "Does the domain encompass high-stakes areas such as healthcare or finance?",
        "What are the potential risks associated with the domain?",
        "Are there any pre-existing assumptions that are necessary?",
        "Is feedback from domain experts a requirement for this process?"
    ],
    3: [
        "What type of information is contained within the data?",
        "What inferences can be drawn from this data?",
        "Which aspects of the data are the most significant?",
        "How is the information distributed within the data?",
        "Is it feasible to enhance the model’s performance by reducing the number of dimensions?",
        "Could the use of data summarization techniques provide a more effective explanation?"
    ],
    4: [
        "What attributes render a parameter, objective, or action important to the system?",
        "At what point did the system assess a parameter, objective, or action, and when was it disregarded by the model?",
        "What are the repercussions of altering a decision or modifying a parameter?",
        "How was a specific action executed by the system?",
        "How are these model parameters, objectives, or actions interconnected?",
        "What elements does the system consider (or exclude) when making a decision?",
        "What methods does the system employ or avoid to accomplish a goal or inference?"
    ],
    5: [
        "What are the expected outcomes from the Predictions layer?",
        "How does the model's performance affect predictions?",
        "What metrics are used to evaluate the accuracy of predictions?",
        "What external factors can influence the predictions?",
        "How often are the predictions updated based on new data?"
    ]
};

const methodologies = {
    1: [
        {
            question: "Which regulation should be specified for this AI workflow?",
            methods: [
                "Consult legal experts to identify applicable regulations.",
                "Utilize regulatory compliance software for tracking.",
                "Implement a legal risk assessment framework."
            ]
        },
        {
            question: "Which country has specified this regulation?",
            methods: [
                "Research regulatory databases for country-specific regulations.",
                "Engage with international regulatory bodies for insights.",
                "Conduct comparative legal studies."
            ]
        },
        {
            question: "Can you list out the key requirements set up by the regulation?",
            methods: [
                "Use regulatory checklists to ensure compliance.",
                "Engage stakeholders in defining key compliance requirements.",
                "Implement a requirements management tool."
            ]
        },
        {
            question: "Can you categorize the guidelines into ethical and technical ones?",
            methods: [
                "Develop a framework to categorize compliance requirements.",
                "Utilize expert panels to assess ethical implications.",
                "Apply qualitative analysis techniques."
            ]
        },
        {
            question: "Who are the stakeholders involved in this AI workflow?",
            methods: [
                "Map stakeholders using stakeholder analysis tools.",
                "Conduct interviews with identified stakeholders.",
                "Utilize participatory design methods."
            ]
        }
    ],
    2: [
        {
            question: "What are the specific requirements within the domain?",
            methods: [
                "Conduct domain-specific research to gather requirements.",
                "Engage domain experts in workshops.",
                "Utilize requirement elicitation techniques."
            ]
        },
        {
            question: "Does the domain encompass high-stakes areas such as healthcare or finance?",
            methods: [
                "Perform a risk assessment analysis.",
                "Conduct case studies in high-stakes domains.",
                "Engage with industry experts."
            ]
        },
        {
            question: "What are the potential risks associated with the domain?",
            methods: [
                "Implement risk management frameworks.",
                "Utilize SWOT analysis to identify risks.",
                "Conduct failure mode and effects analysis (FMEA)."
            ]
        },
        {
            question: "Are there any pre-existing assumptions that are necessary?",
            methods: [
                "Document assumptions as part of the project charter.",
                "Utilize critical assumptions analysis techniques.",
                "Conduct expert interviews."
            ]
        },
        {
            question: "Is feedback from domain experts a requirement for this process?",
            methods: [
                "Establish a feedback loop with domain experts.",
                "Conduct focus groups for iterative feedback.",
                "Utilize online surveys to gather expert feedback."
            ]
        }
    ],
    3: [
        {
            question: "What type of information is contained within the data?",
            methods: [
                "Conduct data profiling to understand data types.",
                "Use exploratory data analysis (EDA) techniques.",
                "Implement data lineage tools."
            ]
        },
        {
            question: "What inferences can be drawn from this data?",
            methods: [
                "Utilize statistical analysis to derive insights.",
                "Implement machine learning algorithms for prediction.",
                "Conduct data visualization to identify patterns."
            ]
        },
        {
            question: "Which aspects of the data are the most significant?",
            methods: [
                "Use feature importance analysis in machine learning.",
                "Implement correlation analysis to identify relationships.",
                "Conduct hypothesis testing."
            ]
        },
        {
            question: "How is the information distributed within the data?",
            methods: [
                "Use data distribution analysis tools.",
                "Implement data visualization techniques.",
                "Conduct exploratory data analysis (EDA)."
            ]
        },
        {
            question: "Is it feasible to enhance the model’s performance by reducing the number of dimensions?",
            methods: [
                "Apply dimensionality reduction techniques such as PCA.",
                "Utilize feature selection methods.",
                "Conduct model performance comparisons with and without dimensionality reduction."
            ]
        },
        {
            question: "Could the use of data summarization techniques provide a more effective explanation?",
            methods: [
                "Implement data summarization algorithms.",
                "Utilize data visualization techniques for summarization.",
                "Conduct user studies to assess effectiveness."
            ]
        }
    ],
    4: [
        {
            question: "What attributes render a parameter, objective, or action important to the system?",
            methods: [
                "Utilize attribute importance metrics.",
                "Conduct sensitivity analysis to assess impact.",
                "Implement decision trees for visualization."
            ]
        },
        {
            question: "At what point did the system assess a parameter, objective, or action, and when was it disregarded by the model?",
            methods: [
                "Conduct model auditing to trace decision-making.",
                "Implement logging for model parameters.",
                "Utilize explainability techniques."
            ]
        },
        {
            question: "What are the repercussions of altering a decision or modifying a parameter?",
            methods: [
                "Conduct impact analysis for parameter changes.",
                "Utilize simulation models to predict outcomes.",
                "Implement scenario analysis."
            ]
        },
        {
            question: "How was a specific action executed by the system?",
            methods: [
                "Document action execution workflows.",
                "Utilize system logs for tracing actions.",
                "Implement process mapping."
            ]
        },
        {
            question: "How are these model parameters, objectives, or actions interconnected?",
            methods: [
                "Create parameter relationship diagrams.",
                "Utilize system dynamics modeling.",
                "Conduct correlation analysis."
            ]
        },
        {
            question: "What elements does the system consider (or exclude) when making a decision?",
            methods: [
                "Implement decision trees to visualize decision-making.",
                "Conduct a decision analysis framework.",
                "Utilize explainable AI methods."
            ]
        },
        {
            question: "What methods does the system employ or avoid to accomplish a goal or inference?",
            methods: [
                "Document methods as part of the design process.",
                "Conduct method selection analysis.",
                "Utilize comparative studies of methodologies."
            ]
        }
    ],
    5: [
        {
            question: "What are the expected outcomes from the Predictions layer?",
            methods: [
                "Define outcome metrics at the beginning of the project.",
                "Conduct validation studies to verify outcomes.",
                "Utilize outcome measurement frameworks."
            ]
        },
        {
            question: "How does the model's performance affect predictions?",
            methods: [
                "Implement performance evaluation metrics.",
                "Conduct comparative studies on model performance.",
                "Utilize visualization techniques for performance insights."
            ]
        },
        {
            question: "What metrics are used to evaluate the accuracy of predictions?",
            methods: [
                "Utilize common metrics like accuracy, precision, and recall.",
                "Implement confusion matrix analysis.",
                "Conduct ROC curve analysis."
            ]
        },
        {
            question: "What external factors can influence the predictions?",
            methods: [
                "Conduct a risk analysis for external factors.",
                "Implement sensitivity analysis for variables.",
                "Utilize scenario modeling."
            ]
        },
        {
            question: "How often are the predictions updated based on new data?",
            methods: [
                "Establish a data update schedule.",
                "Implement continuous learning systems.",
                "Utilize real-time data processing tools."
            ]
        }
    ]
};

// Initially display the first layer
layers[0].style.display = 'block';

document.querySelectorAll('.layer-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const layer = event.target.closest('.layer');

        // Get the layer number
        const layerNum = layer.getAttribute('data-layer');

        // Clear previous questions
        questionsContainer.innerHTML = '';

        // Display corresponding questions as checkboxes
        questions[layerNum].forEach(question => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = question;
            checkbox.value = question;
            checkbox.classList.add('question-checkbox');

            const label = document.createElement('label');
            label.htmlFor = question;
            label.textContent = question;

            questionsContainer.appendChild(checkbox);
            questionsContainer.appendChild(label);
            questionsContainer.appendChild(document.createElement('br'));
        });

        // Show current layer and its parent
        let currentLayer = layer;
        while (currentLayer) {
            currentLayer.style.display = 'block'; // Show the current layer
            currentLayer = currentLayer.parentElement.closest('.layer'); // Move to the parent layer
        }

        // Show next layer only if it exists
        const nextLayer = layer.querySelector('.layer');
        if (nextLayer) {
            nextLayer.style.display = 'block'; // Show the next layer
        }
    });
});

// Add event listener for checkboxes
questionsContainer.addEventListener('change', () => {
    // Clear previous methodologies
    methodologyList.innerHTML = '';

    const selectedCheckboxes = questionsContainer.querySelectorAll('.question-checkbox:checked');

    selectedCheckboxes.forEach(checkbox => {
        const questionText = checkbox.value;

        // Find the methodologies corresponding to the selected question
        Object.entries(methodologies).forEach(([layerNum, methodList]) => {
            methodList.forEach(method => {
                if (method.question === questionText) {
                    methodologyList.innerHTML += `<li><strong>${questionText}</strong>:<ul>${method.methods.map(m => `<li>${m}</li>`).join('')}</ul></li>`;
                }
            });
        });
    });
});
