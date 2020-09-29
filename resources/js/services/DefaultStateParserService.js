export default new class DefaultStateParserService{
  parseDataFromServerToState(serverData){
    return {
      pageSettings: {
        ...serverData.pageSettings,
        successMessage: serverData.success,
        errorMessage: serverData.error
      },
    }
  }
}