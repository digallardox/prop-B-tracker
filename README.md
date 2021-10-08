# Project Overview

## Project Name

ATX Camping Ban Offenses

https://digallardox.github.io/ATX-Camping-Ban-Tracker/

## Project Description

This application will allow people to see & filter, the ATX proposition B Camping Ban Offenses. And hopefullyl, I can visualize the data in a meaningful way. i.e, the site will update with a pie chart on the number of offenses by men vs woman, or by different races, etc.

## API and Data Sample

https://data.austintexas.gov/Public-Safety/Proposition-B-Camping-Ban-Offenses/qc59-phn7

    {
        "court_agency": "DACC",
        "offense_case_type": "CO",
        "offense_date": "2021-06-15T00:00:00.000",
        "case_filed_date": "2021-06-24T00:00:00.000",
        "charge_code": "CC62611",
        "charge_description": "Obstruction in the DACC Area Prohibited",
        "offense_street_name": "200 Block East 6th Street",
        "case_closed": false,
        "agency": "APD",
        "officer_code": "5193",
        "race": "Black",
        "defendant_gender": "Male"
    },
    {
        "court_agency": "DACC",
        "offense_case_type": "CO",
        "offense_date": "2021-06-15T00:00:00.000",
        "case_filed_date": "2021-06-25T00:00:00.000",
        "charge_code": "CC62611",
        "charge_description": "Obstruction in the DACC Area Prohibited",
        "offense_street_name": "500 Block Trinity Street",
        "case_closed": false,
        "agency": "APD",
        "officer_code": "5193",
        "race": "Black",
        "defendant_gender": "Male"
    }

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

![](https://res.cloudinary.com/dhmx2wuik/image/upload/v1630329439/PXL_20210830_130345231_2_zb0k1k.jpg)

### MVP/PostMVP

#### MVP
* Render all incident data into cards that displays information.
* allow users to filter by data sets i.e gender, race, etc.
* a learn more page that gives more information about the Prop-B camping ban Offense


#### PostMVP  
* A counter for # of total cases and # of cases by filtered result.
* graphics that visually tell a story i.e a pie chart that shows the percentage of incident by male vs. female.
* 'most active date' function that displays the date with the most incidents.
* potentially more useful data such as D/W/M averages, graphs plotting # of incidents along the date to see if cases are rising or lowering, etc.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 13| Project Approval | Incomplete
|July 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|July 14| Pseudocode / actual code | Incomplete
|July 15| Initial Clickable Model  | Incomplete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

![](https://res.cloudinary.com/dhmx2wuik/image/upload/v1630329443/PXL_20210830_130338656_ztnkbj.jpg)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup JS data handling | H | 4.5hrs|  | |
| Filter by functioin | H | 2.5hrs|  |  |
| CSS Styling | M | 3hrs|  |  |
| Results Counter | M | 1hrs|  |  |
| Learn More Page | M |1.5hrs|  |  |
| Basic HTML structure | M | 2hrs|  |  |
| Basic Troubleshooting | H | 3hrs|  |  |
| Total | H | 6hrs|  | |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
