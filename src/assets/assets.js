import user_icon from './user_icon.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'

export const assets = {
    user_icon,
     microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo
}

export const profileFields = [
  {label: 'First Name',key: 'firstname',placeholder: 'Your first name',type: 'text',required: true},
  {label: 'Middle Name', key: 'middlename',placeholder: 'Your middle name',type: 'text',required: false},
  {label: 'Last Name', key: 'lastname',placeholder: 'Your last name',type: 'text',required: true},
  {label: 'Phone Number',key: 'phone',placeholder: 'XXXXX XXXXX',type: 'tel',required: true},
  {label: 'Email',key: 'email',placeholder: 'you@example.com',type: 'email',required: true},
  {label: 'Additional Email',key: 'additionalemail',placeholder: 'another@example.com',type: 'email',required: false},
];

export const educationFields = [
  { label: 'Degree', key: 'degree', placeholder: 'e.g., B.Tech',required: true },
  { label: 'Institution', key: 'institution', placeholder: 'e.g., IIT Delhi',required: true },
  { label: 'Branch', key: 'branch', placeholder: 'e.g., CSE',required: true },
  { label: 'Year of Passing', key: 'year', placeholder: 'e.g., 2025',required: true },
  { label: 'Percentage / CGPA', key: 'percentage', placeholder: 'e.g., 8.5 or 85%', type: 'number',required: true },
  { label: 'Country', key: 'country', placeholder: 'enter country name',required: true},
  { label: 'State', key: 'state', placeholder: 'enter state name',required: true},
  { label: 'City', key: 'city', placeholder: 'enter city name',required: true},
  { label: 'Pin Number', key: 'pinno', placeholder: 'enter Pin Number',required: true},
  
];

export const addressFields =[
    {label: 'Name', key: 'name', placeholder: 'enter your full name',required: true},
    {label: 'Country', key: 'country', placeholder: 'enter your country',required: true},
    {label: 'State', key: 'state', placeholder: 'enter your state',required: true},
    {label: 'City', key: 'city', placeholder: 'enter your city',required: true},
    {label: 'Village', key: 'village', placeholder: 'enter your village',required: true},
    {label: 'Pin Number', key: 'pinno', placeholder: 'enter your Pin Number',required: true},
    {label: 'Phone number', key: 'phoneno', placeholder: 'enter your phone number',required: true},
];

export const projectFields =[
    {label: 'Name', key: 'name', placeholder: 'project name',required: true},
    {label: 'Technologies', key: 'technologies', placeholder: 'enter technologies used in your project',required: true},
    {label: 'Description', key: 'description', placeholder: 'enter about your project',required: true},
    {label: 'Github Profile', key: 'github', placeholder: 'https://github.com/yourusername', type:'url', required: false},
];

export const experienceFields = [
  { label: 'Company Name', key: 'company', placeholder: 'Enter company name', required: true },
  { label: 'Role', key: 'role', placeholder: 'Enter your role or position', required: true },
  { label: 'Start Date', key: 'startDate', placeholder: 'Enter start date (MM/YYYY)', required: true },
  { label: 'End Date', key: 'endDate', placeholder: 'Enter end date (MM/YYYY or Present)', required: true },
  {label: 'Country', key: 'country', placeholder: 'enter your country',required: true},
  {label: 'City', key: 'city', placeholder: 'enter your city',required: true},
];

export const certificationFields = [
  { label: 'Certificate Name', key: 'name', placeholder: 'Enter certificate name', required: true },
  { label: 'Provider', key: 'provider', placeholder: 'Enter provider name', required: true },
  { label: 'Enrollment Number', key: 'enrollment', placeholder: 'Enter enrollment ID/number', required: false },
  { label: 'Percentage', key: 'percentage', placeholder: 'Enter percentage (if any)', required: false },
  { label: 'Subject Name', key: 'subject', placeholder: 'Enter subject name', required: false },
  { label: 'Description', key: 'description', placeholder: 'Describe the certificate briefly', required: false },
  { label: 'Skills Involved', key: 'skills', placeholder: 'e.g., React, SQL, AWS', required: false },
  { label: 'Date', key: 'date', placeholder: 'MM/YY', required: false },
];

export const achievementFields = [
  { label: 'Achievement Name', key: 'name', placeholder: 'Enter achievement title' },
  { label: 'Description', key: 'description', placeholder: 'Describe your achievement' },
];

export const websiteFields = [
  { label: 'Website Name', key: 'name', placeholder: 'e.g. Portfolio, Blog' },
  { label: 'URL', key: 'url', placeholder: 'https://example.com' },
];
