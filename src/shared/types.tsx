export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  Doctors = "doctors",
  Offices = "offices",
  ContactUs = "contactus",
}

export interface InfoType {
  cardTitle: string;
  cardText: string;
  cardDelay: number;
}

export interface DocType {
  doctorName: string;
  doctorImage: string;
  doctorDescription: string;
}
