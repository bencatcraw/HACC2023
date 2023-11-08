import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

const defaultFacilities = [

  {
    name: 'Castle Health Clinic of Laie',
    address: '55-510 Kamehameha Highway, Suite 5 Laie, Hawaii 96762',
    island: 'Oahu',
    services: 'Medicare',
    type: 'Clinic',
    website: 'https://carelistings.com/rural-health-centers/laie-hi/castle-health-clinic-of-laie/5ace880c93efd2372f97b93a',
    phone: '(808) 263-5142',
    insurance: 'idk',
  },
  {
    name: 'East Hawaii Health Clinic at 1190 Waianuenue',
    address: '1190 Waianuenue Avenue, First Floor Hilo, Hawaii 96720',
    island: 'Hawaii',
    services: 'Medicare',
    type: 'Clinic',
    website: 'https://www.easthawaiihealthclinics.org/primary-care-1190/',
    phone: '(808) 932-4215',
    insurance: 'idk',
  },
  {
    name: 'HHSC-KAUAI REGION CLINICS SPECIALTY CLINIC AT KALAHEO',
    address: '2469 Puu Road, Suite C Kalaheo, Hawaii 96741-8509',
    island: 'Kauai',
    services: 'Pediatric or Obstetric Care',
    type: 'Clinic',
    website: 'https://kauai.hhsc.org/facilities/the-specialty-clinic-at-kalaheo/',
    phone: '(808) 378-4557',
    insurance: 'idk',
  },
  {
    name: 'Kihei Clinic',
    address: '1279 South Kihei Road, Suite 120 Kihei, Hawaii 96753',
    island: 'Maui',
    services: 'Same Day Care, Laboratory, Lifestyle Medicine Programs, Medication Counseling, Optical Dispensing, Pediatrics, Pharmacy, Physical Therapy',
    type: 'Clinic',
    website: 'https://healthy.kaiserpermanente.org/hawaii/facilities/kaiser-permanente-kihei-clinic-100440',
    phone: '(808) 243-6000',
    insurance: 'HMO, Senior Advantage, Medicaid(QUEST)',
  },
  {
    name: 'Molokai General Hospital Rural Health Clinic',
    address: '280 Home Olu Place Kaunakakai, Hawaii 96748',
    island: 'Molokai',
    services: 'Women’s Health, Primary Care, Emergency Services, Radiology, Outpatient Chemotherapy, Physical Therapy, Blood Banking Lab, X-rays and Imaging',
    type: 'Clinic',
    website: 'https://www.queens.org/locations/hospitals/molokai/',
    phone: '(808) 553-5331',
    insurance: 'Aetna, HMA, HMAA, HMSA, MDX, Medicare, UHA',
  },
  {
    name: 'ALOHA NURSING & REHAB CENTRE',
    address: '45-545 Kamehameha Highway Kaneohe, Hawaii 96744',
    island: 'Oahu',
    services: 'Skilled Nursing Care, Rehabilitation, Long Term Care, Comfort Care, Respite Care',
    type: 'Rehab Centre, Nursing Home',
    website: 'https://www.alohanursing.com/',
    phone: '(808) 247-2220',
    insurance: 'idk',
  },
  {
    name: 'ANN PEARL NURSING FACILITY',
    address: '45-181 Waikalua Road Kaneohe, Hawaii 96744',
    island: 'Oahu',
    services: 'Memory Care, Rehabilitation, Long Term Care, Home Health, Adult Day Health, Care Management',
    type: 'Rehab Centre, Nursing Home',
    website: 'https://www.ohanapacific.com/ann-pearl',
    phone: '(808) 247-8558',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'HALE HO’OLA HAMAKUA',
    address: '45-547 Plumeria Street Honokaa, Hawaii 96727',
    island: 'Hawaii',
    services: 'Rehabilitation, Long Term Care',
    type: 'Rehab Centre, Nursing Home',
    website: 'https://www.halehoolahamakua.org/',
    phone: '(808) 932-4100',
    insurance: 'idk',
  },
  {
    name: 'HALE KUPUNA HERITAGE HOME, LLC',
    address: '4297 A Omao Road Koloa, Hawaii 96756',
    island: 'Kauai',
    services: 'Memory Care, Rehabilitation, Long Term Care, Home Health, Adult Day Health, Care Management',
    type: 'Rehab Centre, Nursing Home',
    website: 'https://www.ohanapacific.com/hale-kupuna-rehab-nursing',
    phone: '(808) 742-7591',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'THE CARE CENTER OF HONOLULU',
    address: '1900 Bachelot Street Honolulu, Hawaii 96817',
    island: 'Oahu',
    services: 'Respiratory Care, Rehabilitation, Skilled Nursing Services',
    type: 'Rehab Centre, Nursing Home',
    website: 'https://www.ccoh.us/',
    phone: '(808) 531-5302',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'ALOHA MOBILE IMAGING',
    address: '403 Kawaihae Street Honolulu, Hawaii 96825',
    island: 'Oahu',
    services: 'Mobile X-ray Services, Mobile Ultrasound Imaging Services, Professional Radiology Interpretation',
    type: 'X-ray Clinic',
    website: 'https://pacificmobileimaging.com/',
    phone: '(808) 271-5691',
    insurance: 'HMO, Senior Advantage, Medicaid(QUEST)',
  },
  {
    name: 'SALVATION ARMY ADULT DAY HEALTH SERVICES',
    address: '296 North Vineyard Boulevard Honolulu, Hawaii 96817',
    island: 'Oahu',
    services: 'Activities, Exercise Program, Socialization',
    type: 'Adult Day Health Center',
    website: 'https://hawaii.salvationarmy.org/hawaii_2/adhs/',
    phone: '(808) 521-6551',
    insurance: 'Medicaid(QUEST)',
  },
  {
    name: 'YUKIO OKUTSU STATE VETERANS HOME',
    address: '1180 Waianuenue Avenue Hilo, Hawaii 96720',
    island: 'Hawaii',
    services: 'Respite Care, Hospice, 24-hr Skilled Nursing',
    type: 'Adult Day Health Center',
    website: 'https://www.yukiookutsustateveteranshome.org/',
    phone: '(808) 961-1500',
    insurance: 'Medicaid(QUEST)',
  },
  {
    name: 'KAUAI ADULT DAY HEALTH CENTER',
    address: '2943 Kress Street Lihue, Hawaii 96766',
    island: 'Kauai',
    services: 'Memory Care, Rehabilitation, Long Term Care, Home Health, Adult Day Health, Care Management',
    type: 'Adult Day Health Center',
    website: 'https://www.ohanapacific.com/kauai-adult-day-health-center',
    phone: '(808) 961-1500',
    insurance: 'Medicare, Medicaid(QUEST)',
  },
  {
    name: 'ALOHA EYE CLINIC SURGICAL CENTER, LLC',
    address: '450 Ho’okahi Street Wailuku, Hawaii 96793',
    island: 'Maui',
    services: 'Eye Exam, Eye Surgery, Cataract Center',
    type: 'Eye Clinic',
    website: 'https://alohaeye.com/',
    phone: '(808) 877-3984',
    insurance: 'Medicare, HMSA, Aetna, TRICARE',
  },
  {
    name: 'ASIA PACIFIC SURGERY, LLC',
    address: '1401 South Beretania Street, Suite 890 Honolulu, Hawaii 96814',
    island: 'Oahu',
    services: 'Plastic Surgery',
    type: 'Plastic Surgery Clinic',
    website: 'https://www.drshimching.com/',
    phone: '(808) 537-9375',
    insurance: 'idk',
  },
  {
    name: 'BIG ISLAND ENDOSCOPY CENTER, LLC',
    address: '64-5188 Kinohou Street Kamuela, Hawaii 96743',
    island: 'Hawaii',
    services: 'Endoscopy, Colonoscopy, Liver Biopsy, Enteroscopy',
    type: 'Endoscopy Clinic',
    website: 'https://www.bigislandgastro.com/',
    phone: '(808) 887-0600',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Fresenius Medical Care - Lanai Community Dialysis Center',
    address: '628 7th Street Lanai City, Hawaii 96763',
    island: 'Lanai',
    services: 'In-center Hemodialysis',
    type: 'Dialysis Center',
    website: 'https://www.freseniuskidneycare.com/dialysis-centers/hawaii/2809',
    phone: '(808) 565-9650',
    insurance: 'idk',
  },
  {
    name: 'Liberty Dialysis - Hawaii LLC - Ala Moana Dialysis Facility',
    address: '500 Ala Moana Boulevard, Suite 7302 Honolulu, Hawaii 96813',
    island: 'Oahu',
    services: 'In-center Hemodialysis',
    type: 'Dialysis Center',
    website: 'https://www.freseniuskidneycare.com/dialysis-centers/hawaii/100115',
    phone: '(808) 245-6032',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Liberty Dialysis - Hawaii LLC - Hilo Dialysis Facility',
    address: '140 Rainbow Drive Hilo Hawaii 96720',
    island: 'Hawaii',
    services: 'In-center Hemodialysis, Home Hemodialysis, Home Peritoneal Hemodialysis, Kidney Disease Education Class',
    type: 'Dialysis Center',
    website: 'https://www.freseniuskidneycare.com/dialysis-centers/hawaii/7383',
    phone: '(808) 935-3422',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Liberty Dialysis - Hawaii LLC - Kauai Dialysis Facility',
    address: '3224 Elua Street Lihue, Hawaii 96766',
    island: 'Kauai',
    services: 'In-center Hemodialysis',
    type: 'Dialysis Center',
    website: 'https://www.freseniuskidneycare.com/dialysis-centers/hawaii/7376',
    phone: '(808) 245-3770',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Liberty Dialysis - Hawaii LLC - Hawaii Kai Dialysis Facility',
    address: '7192 Kalanianaole Highway, Suite Q-101 Honolulu, Hawaii 96825',
    island: 'Oahu',
    services: 'In-Center Hemodialysis, Kidney Disease Education Class',
    type: 'Dialysis Center',
    website: 'https://www.freseniuskidneycare.com/dialysis-centers/hawaii/7384',
    phone: '(808) 394-6274',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Adventist Health Castle Home Care',
    address: '45-045 Kamehameha Highway Kaneohe, Hawaii 96744',
    island: 'Oahu',
    services: 'Skilled Nursing, Physical, Occupational, and Speech Therapy, Medical Social Work, Home Health Aide (Assistance with Activities of Daily Living)',
    type: 'Nursing Home',
    website: 'https://www.adventisthealth.org/home-care-services/locations/castle/',
    phone: '(808) 263-5077',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Cradles N’ Crayons, LLC (Kahului)',
    address: '24 N. Church Street, Suite 200 Wailuku, Hawaii 96793',
    island: 'Maui',
    services: 'Nursing Services, Private Duty Nursing for Families with Medically Fragile Children',
    type: 'Pediatric Nursing Agency',
    website: 'https://cradlesncrayons.com/',
    phone: '(808) 356-4357',
    insurance: 'Medicaid, HMSA, Quest Hawaii',
  },
  {
    name: 'Hale Makua Home Health Care Agency',
    address: '1520 East Main Street Wailuku, Hawaii 96793',
    island: 'Maui',
    services: 'Care Homes, Home Health, Long Term Care, Rehab, Adult Day Health',
    type: 'Nursing Home',
    website: 'https://www.halemakua.org/',
    phone: '(808) 244-3661',
    insurance: 'HMSA',
  }, {
    name: 'Hilo Medical Center Home Care',
    address: '1190 Waianuenue Avenue, Hilo, Hawaii 96720',
    island: 'Hawaii',
    services: 'Behavioral Health, Medical Unit, Progressive Care Unit, Imaging, Maternity, Intensive Care Unit, Pharmacy, Rehabilitation Services, Patient Services',
    type: 'Nursing Home',
    website: 'https://www.hilomedicalcenter.org/',
    phone: '(808) 974-4720',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Kohala Home Health Care of North Hawaii Community Hospital',
    address: '67-1125 Mamalahoa Highway, Kamuela, Hawaii 96743',
    island: 'Hawaii',
    services: 'Home Health Aides, Occupational, Physical, and Speech therapy, Professional Skilled Nursing Care',
    type: 'Community Hospital',
    website: 'https://www.queens.org/locations/hospitals/north-hawaii/services/kohala-home/',
    phone: '(808) 881-4711',
    insurance: 'Medicare',
  },
  {
    name: 'Bristol Hospice – Hawaii, LLC',
    address: '55 Merchant Street, Suite 2900, Honolulu, Hawaii 96813',
    island: 'Oahu',
    services: 'Hospice Care, Therapy, Counseling',
    type: 'Hospice Facility',
    website: 'https://bristolhospice.com/hawaii/',
    phone: '(808) 536-8012',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'Hospice Maui',
    address: '400 Mahalani Street, Wailuku, Hawaii 96793',
    island: 'Maui',
    services: 'Hospice Care, Palliative Care, Bereavement Care',
    type: 'Hospice Facility',
    website: 'https://www.hospicemaui.org/',
    phone: '(808) 244-5555',
    insurance: 'Medicare, HMSA, Kaiser, Medicaid',
  },
  {
    name: 'Hospice of Hilo',
    address: '1011 Waianuenue Avenue, Hilo, Hawaii 96720',
    island: 'Hawaii',
    services: 'Hospice Care, Palliative Care, Bereavement Care',
    type: 'Hospice Facility',
    website: 'https://www.hawaiicarechoices.org/',
    phone: '(808) 969-1733',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'Kapiolani Medical Center for Women and Children',
    address: '1319 Punahou Street, Honolulu, Hawaii 96826',
    island: 'Oahu',
    services: 'Cancer Center, Heart Center, Bone and Joint Center',
    type: 'Hospital',
    website: 'https://www.hawaiipacifichealth.org/kapiolani/',
    phone: '(808) 983-6000',
    insurance: 'HMSA',
  },
  {
    name: 'Kaiser Foundation Hospital',
    address: '3288 Moanalua Road, Honolulu, Hawaii 96819',
    island: 'Oahu',
    services: 'Emergency Care, Hospital Services and Care',
    type: 'Hospital',
    website: 'https://healthy.kaiserpermanente.org/hawaii/facilities/kaiser-permanente-moanalua-medical-center-100434',
    phone: '(808) 432-0000',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'Kuakini Medical Center',
    address: '347 North Kuakini Street, Honolulu, Hawaii 96817',
    island: 'Hawaii',
    services: 'Emergency Care, Hospital Services and Care',
    type: 'Hospital',
    website: 'https://www.kuakini.org/wps/portal/public/About-Us/Subsidiaries/Kuakini-Medical-Center',
    phone: '(808) 536-2236',
    insurance: 'Medicare, Medicaid',
  },
  {
    name: 'Opportunities and Resources, Inc.',
    address: '64-1510 Kamehameha Highway, House 3-B, Wahiawa, Hawaii 96786',
    island: 'Oahu',
    services: 'Day Activity, Residential Care, Recreation and Leisure Program',
    type: 'Disability Support Clinic',
    website: 'https://www.ori-hawaii.com/',
    phone: '(808) 622-3929',
    insurance: 'idk',
  },
  {
    name: 'Kula Hospital',
    address: '100 Keokea Place, Kula, Hawaii 96790-7450',
    island: 'Maui',
    services: 'Imaging, Long Term Care, Rehabilitation',
    type: 'Hospital',
    website: 'https://www.mauihealth.org/locations/kula-hospital/',
    phone: '(808) 878-1221',
    insurance: 'HMO, Medicaid, Senior Advantage',
  },
  {
    name: 'The Arc in Hawaii (Kaimuki B)',
    address: '811 19th Avenue, Honolulu, Hawaii 96816',
    island: 'Hawaii',
    services: 'Adult Health and Residential Services',
    type: 'Hospital',
    website: 'https://www.thearcinhawaii.org/',
    phone: '(808) 737-7995',
    insurance: 'Medicare',
  },
  {
    name: 'Legacy of Life Hawaii',
    address: '405 North Kuakini Street, Suite 810, Honolulu, Hawaii 96817-6300',
    island: 'Oahu',
    services: 'Organ and Tissue Recovery',
    type: 'Organ Clinic',
    website: 'https://legacyoflifehawaii.org/',
    phone: '(808) 599-7630',
    insurance: 'idk',
  },
  {
    name: 'Pacific Mobile Imaging, LLC',
    address: '1380 Lusitana Street, Second Floor, Honolulu, Hawaii 96813',
    island: 'Oahu',
    services: 'Mobile X-ray Services, Mobile Ultrasound Imaging Services, Professional Radiology Interpretation',
    type: 'X-ray Clinic',
    website: 'https://pacificmobileimaging.com/',
    phone: '(808) 599-4471',
    insurance: 'HMO, Senior Advantage, Medicaid(QUEST)',
  },
];

const Search = () => {
  useEffect(() => {
    // This code will run after the component has mounted
    const body = document.body;
    body.style.background = 'none';
    body.style.backgroundColor = '#98C1D9';
  }, []);
  const [filters, setFilters] = useState({ name: '', address: '', island: '', services: '', insurance: '', type: '', phone: '', owner: '' });
  const [data, setData] = useState(defaultFacilities);
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filteredData = defaultFacilities;

    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        filteredData = filteredData.filter(item => item[key].toLowerCase().includes(filters[key].toLowerCase()));
      }
    });

    setData(filteredData);
  };
  useEffect(() => {
    applyFilters();
  });
  const resetFilters = () => {
    setFilters({ name: '', location: '', island: '', services: '', insurance: '', type: '', phone: '' });
    document.getElementById('oahu-radio').checked = false;
    document.getElementById('hawaii-radio').checked = false;
    document.getElementById('maui-radio').checked = false;
    document.getElementById('kauai-radio').checked = false;
    document.getElementById('lanai-radio').checked = false;
    document.getElementById('molokai-radio').checked = false;
    document.getElementById('clinic-radio').checked = false;
    document.getElementById('hospital-radio').checked = false;
    document.getElementById('rehab-radio').checked = false;
    document.getElementById('nursing-radio').checked = false;
    document.getElementById('hospice-radio').checked = false;
    document.getElementById('dialysis-radio').checked = false;
    setData(defaultFacilities);
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <h1>Search Page</h1>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={filters.name}
                onChange={handleFilterChange}
              />
              <Form.Control
                className="mt-2"
                type="text"
                name="services"
                placeholder="Services"
                value={filters.services}
                onChange={handleFilterChange}
              />
              <Form.Control
                className="mt-2"
                type="text"
                name="insurance"
                placeholder="Insurance"
                value={filters.insurance}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <h1>Island</h1>
              <Form.Check
                type="radio"
                label="Oahu"
                name="island"
                id="oahu-radio"
                value="Oahu"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hawai'i"
                name="island"
                id="hawaii-radio"
                value="hawaii"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Maui"
                name="island"
                id="maui-radio"
                value="Maui"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Kauai"
                name="island"
                id="kauai-radio"
                value="Kauai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Lanai"
                name="island"
                id="lanai-radio"
                value="Lanai"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Moloka'i"
                name="island"
                id="molokai-radio"
                value="molokai"
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <h1>Facility Type</h1>
              <Form.Check
                type="radio"
                label="Clinic"
                name="type"
                id="clinic-radio"
                value="Clinic"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hospital"
                name="type"
                id="hospital-radio"
                value="Hospital"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Rehab Centre"
                name="type"
                id="rehab-radio"
                value="Rehab Centre"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Nursing Home"
                name="type"
                id="nursing-radio"
                value="Nursing"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Hospice"
                name="type"
                id="hospice-radio"
                value="Hospice"
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                label="Dialysis"
                name="type"
                id="dialysis-radio"
                value="Dialysis"
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary" onClick={resetFilters}>Reset Filters</Button>
      </Form>
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Address: {item.address}<br />
                  Island: {item.island}<br />
                  Services: {item.services}<br />
                  Insurance: {item.insurance}<br />
                  Type: {item.type}<br />
                  Phone: {item.phone}<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
