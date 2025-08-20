module.exports = {
  archiveTemplate: (archiveData) => {
    return {
      service: 'CaseService',
      method: 'GetCases',
      parameter: {
        Title: 'Studentmappe%',
        ContactReferenceNumber: archiveData.ssn,
        IncludeCaseContacts: true,
        SubArchive: 'Student'
      }
    }
  },
  requiredFields: {
    ssn: '12345678910'
  }
}
