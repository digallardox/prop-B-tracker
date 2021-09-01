const API = 'https://data.austintexas.gov/resource/qc59-phn7.json';
const dataContainer = document.querySelector('.data-container');
const selectGender = document.querySelector('#selectGender');

async function retrieveData() {
	try {
		const res = await axios.get(API);
		const dataObj = res.data;
		   for (data of dataObj) {
        let dataSets = {
				agency: data.agency,
				case_closed: data.case_closed,
				case_filed_date: data.case_filed_date,
				charge_code: data.charge_code,
				charge_description: data.charge_description,
				court_agency: data.court_agency,
				defendant_gender: data.defendant_gender,
				offense_case_type: data.offense_case_type,
				offense_date: data.offense_date,
				offense_street_name: data.offense_street_name,
				officer_code: data.officer_code,
				race: data.race,
				};
		renderArrays(dataSets);
			}

	} catch (error) {
		console.log(error);
	}
}

function renderArrays(x) {
    let component = `
	<div class="card">
            <div class="card-body">
                <p class="headline"><b>Agency:</b> ${x.agency}</p>
				<p class="headline"><b>Case Closed:</b> ${x.case_closed}</p>
				<p class="headline"><b>Case Filed:</b> ${x.case_filed_date}</p>
				<p class="headline"><b>Charge Code:</b> ${x.charge_code}</p>
				<p class="headline"><b>Charge Description:</b> ${x.charge_description}</p>
				<p class="headline"><b>Court Agency:</b> ${x.court_agency}</p>
				<p class="headline"><b>Gender:</b> ${x.defendant_gender}</p>
				<p class="headline"><b>Case Type:</b> ${x.offense_case_type}</p>
				<p class="headline"><b>Offense Date:</b> ${x.offense_date}</p>
				<p class="headline"><b>Street Name:</b> ${x.offense_street_name}</p>
				<p class="headline"><b>Officer Code:</b> ${x.officer_code}</p>
				<p class="headline"><b>Race:</b> ${x.race}</p>
			
            </div>
		</div>
        `;
		dataContainer.insertAdjacentHTML('beforeend', component);
}

retrieveData();


////////////////////////////////////////////////// OBJECT KEYS //////////////////////////////////////////////////////////
// agency: 'APD';
// case_closed: false;
// case_filed_date: '2021-06-24T00:00:00.000';
// charge_code: 'CC62611';
// charge_description: 'Obstruction in the DACC Area Prohibited';
// court_agency: 'DACC';
// defendant_gender: 'Male';
// offense_case_type: 'CO';
// offense_date: '2021-06-15T00:00:00.000';
// offense_street_name: '200 Block East 6th Street';
// officer_code: '5193';
// race: 'Black';
