export class VolunteerResponseDto {
  name: string;
  lastName: string;
  birthday: string;  // You can use Date if you prefer
  cin: string;
  email: string;
  phone: string;
  address: string;
  sexId: string;  // Assuming this is either 'male' or 'female'
  blood: string;
  roleId: string;
  scoutGradId: string;
  scoutMissionId: string;
  saveFromHarm: string;  // Assuming 'yes' or 'no'
  healthStatus: string;
  schoolDegree: string;
  organisation: string;
  profession: string;
  inscriptionDate: string;
  familyStatus: string;
  cityId: string;
  regionId: string;

  constructor(data: {
    name: string;
    lastName: string;
    birthday: string;
    cin: string;
    email: string;
    phone: string;
    address: string;
    sexId: string;
    blood: string;
    roleId: string;
    scoutGradId: string;
    scoutMissionId: string;
    saveFromHarm: string;
    healthStatus: string;
    schoolDegree: string;
    organisation: string;
    profession: string;
    inscriptionDate: string;
    familyStatus: string;
    cityId: string;
    regionId: string;
  }) {
    this.name = data.name;
    this.lastName = data.lastName;
    this.birthday = data.birthday;
    this.cin = data.cin;
    this.email = data.email;
    this.phone = data.phone;
    this.address = data.address;
    this.sexId = data.sexId;
    this.blood = data.blood;
    this.roleId = data.roleId;
    this.scoutGradId = data.scoutGradId;
    this.scoutMissionId = data.scoutMissionId;
    this.saveFromHarm = data.saveFromHarm;
    this.healthStatus = data.healthStatus;
    this.schoolDegree = data.schoolDegree;
    this.organisation = data.organisation;
    this.profession = data.profession;
    this.inscriptionDate = data.inscriptionDate;
    this.familyStatus = data.familyStatus;
    this.cityId = data.cityId;
    this.regionId = data.regionId;
  }
}
