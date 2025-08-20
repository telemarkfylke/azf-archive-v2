module.exports = {
  archiveTemplate: (archiveData) => {
    return {
      service: 'CaseService',
      method: 'UpdateCase',
      parameter: {
        CaseNumber: archiveData.caseNumber,
        Title: 'Studentmappe',
        UnofficialTitle: `Studentmappe - ${archiveData.firstName} ${archiveData.lastName}`,
        Contacts: [
          {
            Role: 'Sakspart',
            ReferenceNumber: `recno:${archiveData.recno}`,
            IsUnofficial: true
          }
        ],
        SyncCaseContacts: true
      }
    }
  },
  requiredFields: {
    caseNumber: '30/00000',
    firstName: 'Per',
    lastName: 'Son',
    recno: 12345
  }
}
