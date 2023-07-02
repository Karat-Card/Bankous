# Machine Learning Underwriting Module Software Requirements Specifications

Machine Learning Underwriting Module Software Requirements Specifications

V.3.0.0

By: Vashon Gonzales

Abstract:

The Machine Learning Credit Card Underwriting Jupyter Notebook Module is a software tool designed to automate the process of credit card underwriting using machine learning algorithms. This module integrates various data sources, including bank data, transcript data, Know Your Customer (KYC) data, and Anti-Money Laundering (AML) data, to assess the creditworthiness of applicants and determine their eligibility for credit card funding. The module incorporates data preprocessing techniques, explores different machine learning models, and optimizes hyperparameters to achieve accurate credit risk assessment.

The module consists of several key features, including data loading and merging, feature engineering, data preprocessing, model training and evaluation, model hyperparameter optimization, and credit card underwriting. Users, such as credit analysts and data scientists, interact with the module to analyze credit risk, build models, and make informed decisions on credit card applications.

Through a user-friendly interface, users can load and merge data from various sources, apply feature engineering techniques to extract relevant information, preprocess the data to ensure quality and consistency, and train machine learning models to predict credit risk. The module supports the evaluation of different models and the selection of the best-performing model for credit card underwriting. Additionally, users can optimize model hyperparameters to improve prediction accuracy.

The Machine Learning Credit Card Underwriting Jupyter Notebook Module offers a comprehensive and efficient solution for credit card underwriting, enabling credit unions to automate their decision-making process, minimize risks, and make informed lending decisions. By leveraging the power of machine learning, this module provides a reliable and scalable tool to enhance the efficiency and accuracy of credit card underwriting processes.

Keywords: Machine learning, Credit card underwriting, Jupyter Notebook, Data preprocessing, Feature engineering, Model training, Hyperparameter optimization, Credit risk assessment.

Table of Contents

\## 1. Introduction 5

\### Purpose 5

\### Scope 5

\### Definitions, Acronyms, and Abbreviations 5

\### References 5

\### Overview 5

\## 2. Overall Description 5

\### Product Perspective 5

\### Product Functions 6

\### User Classes and Characteristics 6

\### Operating Environment 7

\### Design and Implementation Constraints 7

\### User Documentation 7

\## 3. System Features 8

\### Feature 1: Data Loading and Merging 8

\### Feature 2: Feature Engineering 8

\### Feature 3: Data Preprocessing 8

\### Feature 4: Model Training and Evaluation 8

\### Feature 5: Model Hyperparameter Optimization 8

\### Feature 6: Credit Card Underwriting 8

\## 4. External Interface Requirements 8

\### User Interfaces 9

\### Hardware Interfaces 9

\### Software Interfaces 9

\### Communications Interfaces 9

\## 5. Non-Functional Requirements 10

\### Performance Requirements 10

\### Security Requirements 10

\### Maintainability Requirements 10

\### Portability Requirements 10

\## 6. System Architecture Diagram 10

### Revision History

| Name            | Date      | Reason for changes                         | Version |
| --------------- | --------- | ------------------------------------------ | ------- |
| Vashon Gonzales | 6/5/2023  | Initial draft                              | 1.0.0   |
| Vashon Gonzales | 6/7/2023  | Added Machine Learning                     | 2.0.0   |
| Vashon Gonzales | 6/14/2023 | Added system architecture and user classes | 3.0.0   |

### ## 1. Introduction <a href="#_toc137635254" id="_toc137635254"></a>

#### ### Purpose <a href="#_toc137635255" id="_toc137635255"></a>

The purpose of the machine learning credit card underwriting Jupyter Notebook module is to automate the process of assessing credit card applications based on applicants' risk criteria. It leverages bank data, transcript data, KYC data, and AML information to determine creditworthiness and provide credit approvals.

#### ### Scope <a href="#_toc137635256" id="_toc137635256"></a>

The module will be implemented as a Jupyter Notebook, integrating various data preprocessing techniques, exploring different machine learning models, optimizing hyperparameters, and conducting credit card underwriting. It will process data, train models, and generate credit card approval decisions based on specified risk criteria.

#### ### Definitions, Acronyms, and Abbreviations <a href="#_toc137635257" id="_toc137635257"></a>

\- SRS: Software Requirements Specification

\- KYC: Know Your Customer

\- AML: Anti-Money Laundering

#### ### References <a href="#_toc137635258" id="_toc137635258"></a>

\-

#### ### Overview <a href="#_toc137635259" id="_toc137635259"></a>

The remainder of the Software Development Specification provides a comprehensive overview of the machine learning credit card underwriting Jupyter Notebook module. It includes the overall description, system features, external interface requirements, non-functional requirements, and a system architecture diagram.

### ## 2. Overall Description <a href="#_toc137635260" id="_toc137635260"></a>

#### ### Product Perspective <a href="#_toc137635261" id="_toc137635261"></a>

The module will operate as a standalone component within the credit card underwriting system. It will utilize various datasets and machine learning techniques to assess creditworthiness and determine credit card approvals.

#### ### Product Functions <a href="#_toc137635262" id="_toc137635262"></a>

The module will perform the following functions:

\- Load and merge relevant data sources

\- Perform feature engineering to create new features

\- Preprocess data by handling missing values, encoding categorical variables, and scaling numerical features

\- Train and evaluate different machine learning models

\- Optimize hyperparameters for the selected model

\- Conduct credit card underwriting by predicting credit card approvals based on risk criteria

#### ### User Classes and Characteristics <a href="#_toc137635263" id="_toc137635263"></a>

![A screenshot of a computer

Description automatically generated with medium confidence](.gitbook/assets/0.png)The module supports a single user class, "User," which interfaces with the "CreditCardUnderwritingModule" class. The User class invokes the runModule() method to execute the credit card underwriting process.

![A screenshot of a computer

Description automatically generated with low confidence](.gitbook/assets/1.png)

#### ### Operating Environment <a href="#_toc137635264" id="_toc137635264"></a>

The module requires the following environment:

\- Jupyter Notebook

\- Python 3.x

#### ### Design and Implementation Constraints <a href="#_toc137635265" id="_toc137635265"></a>

\- The module should be designed to handle large datasets efficiently.

\- The choice of machine learning models should be compatible with the available computational resources.

\- The module should comply with data privacy and security regulations.

#### ### User Documentation <a href="#_toc137635266" id="_toc137635266"></a>

The module should be accompanied by user documentation that provides instructions on how to execute the module, input the necessary data, and interpret the output.

### ## 3. System Features <a href="#_toc137635267" id="_toc137635267"></a>

#### ### Feature 1: Data Loading and Merging <a href="#_toc137635268" id="_toc137635268"></a>

This feature involves loading the bank data, transcript data, KYC data, and AML data from separate sources. The data will be merged based on a common identifier, such as \`customer\_id\`, to create a consolidated dataset.

#### ### Feature 2: Feature Engineering <a href="#_toc137635269" id="_toc137635269"></a>

This feature includes analyzing the data to identify relevant features based on domain knowledge. New features will be created by applying suitable calculations or transformations to the data, enhancing the predictive power of the models.

#### ### Feature 3: Data Preprocessing <a href="#_toc137635270" id="_toc137635270"></a>

Data preprocessing techniques will be applied to the consolidated dataset. This feature involves handling missing values, encoding categorical variables, and scaling numerical features. The preprocessed data will be split into training and testing sets.

#### ### Feature 4: Model Training and Evaluation <a href="#_toc137635271" id="_toc137635271"></a>

This feature involves training different machine learning models, such as Logistic Regression, SVM, Random Forest, GBM, or Neural Networks, on the preprocessed training data. The models will be evaluated using suitable evaluation metrics to assess their performance.

#### ### Feature 5: Model Hyperparameter Optimization <a href="#_toc137635272" id="_toc137635272"></a>

This feature aims to optimize the hyperparameters of the selected model to improve its performance. Techniques like GridSearchCV or RandomizedSearchCV will be employed to find the best combination of hyperparameters. The model will be retrained with the optimized hyperparameters.

#### ### Feature 6: Credit Card Underwriting <a href="#_toc137635273" id="_toc137635273"></a>

The final feature involves applying the trained model to the preprocessed testing data to predict credit card approvals. Applicants who meet the credit union's risk criteria for credit card funding will be identified, and the module will output the list of approved applicants.

### ## 4. External Interface Requirements <a href="#_toc137635274" id="_toc137635274"></a>

#### ### User Interfaces <a href="#_toc137635275" id="_toc137635275"></a>

The module will be accessed through Jupyter Notebook. The user will interact with the module by executing the Jupyter Notebook cells and providing the necessary input data.

#### ### Hardware Interfaces <a href="#_toc137635276" id="_toc137635276"></a>

The module requires a computer or server with sufficient computational resources to handle the data processing and machine learning tasks.

#### ### Software Interfaces <a href="#_toc137635277" id="_toc137635277"></a>

The module relies on the following software interfaces:

\- Jupyter Notebook

\- Python 3.x

\- PHP

\- Required Python packages (pandas, scikit-learn, numpy, matplotlib, seaborn, etc.)

#### ### Communications Interfaces <a href="#_toc137635278" id="_toc137635278"></a>

The Machine Learning Credit Card Underwriting Jupyter Notebook Module incorporates the PHP Mailer library to send email notifications to applicants regarding the decision of their credit card application. The PHP Mailer library provides a simple and efficient way to send emails using PHP.

The communication workflow for emailing applicants is as follows:

Upon completing the credit card underwriting process, the module generates a decision (approved or denied) for each applicant. The module utilizes the PHP Mailer library to send personalized email notifications to the respective applicants. The email content includes information about the decision (approved or denied), along with any additional relevant details.

The PHP Mailer library handles the email sending process, including setting up the SMTP server, configuring email templates, and handling any errors or exceptions that may occur during the process.

The PHP Mailer functionality will be implemented within the module's codebase, utilizing the appropriate functions and classes provided by the library. Configuration parameters, such as SMTP server details and email templates, will be customizable and can be modified according to the specific requirements of the credit union.

The integration of the PHP Mailer functionality enhances the communication aspect of the module, allowing for automated and efficient email notifications to be sent to applicants, providing them with timely information regarding the decision on their credit card application.

### ## 5. Non-Functional Requirements <a href="#_toc137635279" id="_toc137635279"></a>

#### ### Performance Requirements <a href="#_toc137635280" id="_toc137635280"></a>

The module should be designed and optimized for efficient execution, especially when handling large datasets. The model training and prediction processes should be completed within acceptable time limits.

#### ### Security Requirements <a href="#_toc137635281" id="_toc137635281"></a>

The module should comply with data privacy and security regulations. Appropriate measures should be implemented to protect sensitive customer information throughout the credit card underwriting process.

#### ### Maintainability Requirements <a href="#_toc137635282" id="_toc137635282"></a>

The code should be well-structured, modular, and documented to facilitate maintenance and future enhancements. Code reviews and version control practices should be implemented to ensure code quality.

#### ### Portability Requirements <a href="#_toc137635283" id="_toc137635283"></a>

The module should be designed to be platform-independent and compatible with different operating systems. It should also be portable across different Jupyter Notebook environments.

### ## 6. System Architecture Diagram <a href="#_toc137635284" id="_toc137635284"></a>

![A picture containing line, diagram, sketch, origami

Description automatically generated](.gitbook/assets/2.png)

The system architecture diagram provides an overview of the flow within the credit card underwriting module. The User class interacts with the CreditCardUnderwritingModule class, which encompasses various methods for data loading, merging, feature engineering, data preprocessing, model training and evaluation, hyperparameter optimization, and credit card underwriting.
