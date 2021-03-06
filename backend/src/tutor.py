class Tutor: 
    """Tutor class object  to input into the data base
    """
    def __init__(self, tutor_id:str,firstName:str,lastName: str,hourlyRate:float,learningMode:str, location:str, email:str, phoneNum:str,avgRating:int,biography:str, subjects:list, yrLevels: list, volunteer:bool):
        self.tutor_id
        self.firstName = firstName 
        self.lastName = lastName
        self.hourlyRate = hourlyRate
        self.learningMode = learningMode
        self.location = location 
        self.email = email
        self.phoneNum = phoneNum
        self.bio = biography
        self.subjects = subjects
        self.yrLevels = yrLevels
        self.avgRating = avgRating 
        self.volunteer = volunteer

