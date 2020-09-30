export default class DefaultStateParserService{
  static parseDataFromServerToState(serverData){
    return {
      pageSettings: {
        ...serverData.pageSettings,
        successMessage: serverData.success,
        errorMessage: serverData.error
      },
    }
  }
}