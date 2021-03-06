class Tutor: 
    """Tutor class object  to input into the data base
    """
    def __init__(self, firstName:str,lastName: str,email:str, phoneNum:str,avgRating:int,biography:str, subjects:list, yrLevels: list):
        self.firstName = firstName 
        self.lastName= lastName
        self.email = email
        self.phoneNum = phoneNum
        self.bio = biography
        self.subjects = subjects
        self.yrLevels = yrLevels
        self.avgRating = avgRating 

