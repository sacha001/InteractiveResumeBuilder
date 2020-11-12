export class Resume {

    constructor() {
        this.personalData = {
            'firstname': '',
            'middlename': '',
            'lastname': '',
            'dob': '',
            'address': ''
        };

        this.educationInfo = [];

        this.workInfo = [];
        
        this.skills = [];

        this.certificates = [];

    }

    setPersonalInfo(firstname, middlename, lastname, dob, address) {
        this.personalData.firstname = firstname;
        this.personalData.middlename = middlename;
        this.personalData.lastname = lastname;
        this.personalData.dob = dob;
        this.personalData.address = address;
    }

    addEducationInfo(educationEntry) {
        this.educationInfo.push(educationEntry);
    }

    addWorkInfo(workEntry) {
        this.workInfo.push(workEntry);
    }

    addSkills(skillsEntry) {
        this.skills.push(skillsEntry);
    }

    addCertificate(certificateEntry) {
        this.certificates.push(certificateEntry);
    }

}

export class EducationEntry {

    constructor(startDate, endDate, institution, degree, field, gpa) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.institution = institution;
        this.degree = degree;
        this.field = field;
        this.gpa = gpa;
    }

}

export class WorkEntry {

    constructor(startDate, endDate, employer, jobTitle, duties) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.employer = employer;
        this.jobTitle = jobTitle;
        this.duties = duties;
    }

}

export class SkillEntry {

    constructor(skillCategory, skillName, skillType, skillList) {
        this.skillCategory = skillCategory;
        this.skillName = skillName;
        this.skillType = skillType;
        this.skillList = skillList;
    }

}

export class CertificateEntry {

    constructor(name, description, source) {
        this.name = name;
        this.description = description;
        this.source = source;
    }

}

// export default { Resume, EducationEntry, WorkEntry, SkillEntry, CertificateEntry }
