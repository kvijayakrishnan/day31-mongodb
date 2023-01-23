// Design database for Zen class programme
// users collections
db.users.insertMany([
    {
        'userId':1,
        'name':'Lasarus',
        'email':'lasarus@email.com',
        'mobile':'9654879612'
    },
    {
        'userId':2,
        'name':'Anandavalli',
        'email':'anandavali@email.com',
        'mobile':'9657894612'
    },
    {
        'userId':3,
        'name':'Ravi',
        'email':'ravi@email.com',
        'mobile':'9894579612'
    },
    {
        'userId':4,
        'name':'vijay',
        'email':'vijay@email.com',
        'mobile':'9745129612'
    },
    {
        'userId':5,
        'name':'Gokul',
        'email':'gokul@email.com',
        'mobile':'9462179612'
    },
    {
        'userId':6,
        'name':'Arun',
        'email':'arun@email.com',
        'mobile':'9645617612'
    },
    {
        'userId':7,
        'name':'Vinoth',
        'email':'vinoth@email.com',
        'mobile':'9645671612'
    },
    {
        'userId':8,
        'name':'Abdul',
        'email':'abdul@email.com',
        'mobile':'912679612'
    },
    {
        'userId':9,
        'name':'udaykumar',
        'email':'udaykumar@email.com',
        'mobile':'7642879612'
    },
    {
        'userId':10,
        'name':'Jeyaseelan',
        'email':'jeyaseelan@email.com',
        'mobile':'6412579612'
    },
])

// codekata collections
db.codekata.insertMany([
   {
        'userId': 1,
        'problemsSolved': 200,
        'rank': 40000,
        'geekscoins': 4800
   },
   {
    'userId': 2,
    'problemsSolved': 300,
    'rank': 20000,
    'geekscoins': 7800
},
{
    'userId': 3,
    'problemsSolved': 250,
    'rank': 30000,
    'geekscoins': 6800
},
{
    'userId': 4,
    'problemsSolved': 100,
    'rank': 50000,
    'geekscoins': 2800
},
{
    'userId': 5,
    'problemsSolved': 350,
    'rank': 35000,
    'geekscoins': 8000
},
{
    'userId': 6,
    'problemsSolved': 50,
    'rank': 2000,
    'geekscoins': 2800
}
])

// attendance
db.attendance.insertMany([
    {
        'userId': 1,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 2,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 3,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 4,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 5,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 6,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 7,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 8,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
    {
        'userId': 9,
        'date': new Date("2020-10-15"),
        'status': 'absent'
    },
    {
        'userId': 10,
        'date': new Date("2020-10-15"),
        'status': 'present'
    },
])

// topics
db.topics.insertMany([
    {
        'topic_id': 1,
        'topic_name': 'Javascript-functions',
        'tasks': ["arrow-functions", "inline-functions", "IIFE"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 2,
        'topic_name': 'Javascript-variables',
        'tasks': ["var", "let"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 3,
        'topic_name': 'Javascript-events',
        'tasks': ["event-bubbling", "event-listeners"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 4,
        'topic_name': 'mysql-crud',
        'tasks': ["create-table", "update-table", "insert"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 5,
        'topic_name': 'mongo',
        'tasks': ["find", "aggregate"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 6,
        'topic_name': 'HTML',
        'tasks': ["Iframe", "charset", "HTML DOM"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 7,
        'topic_name': 'Nodejs',
        'tasks': ["file system", "build in modules"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 8,
        'topic_name': 'Bootstrap',
        'tasks': ["Navbars", "grid-system"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 9,
        'topic_name': 'React-js',
        'tasks': ["useState", "hooks", "props"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 10,
        'topic_name': 'Angular-js',
        'tasks': ["binding", "event"],
        'date': new Date("2020-10-15"),
    },
])
// tasks
db.tasks.insertMany([
    {
        'user_id': 1,
        'task_name': 'CRM app design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-10-21")
    },
    {
        'user_id': 2,
        'task_name': 'Fitness loger app design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 3,
        'task_name': 'Youtube-clone design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 4,
        'task_name': 'Medical equipment Web scrapping ',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
    {
        'user_id': 5,
        'task_name': 'Student teacher management - design',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-15")
    },
]);
// company_drives
db.drives.insertMany([
    {
        'drive_id': 1,
        'drive_name': 'google',
        'user_ids': [1, 3, 4],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 2,
        'drive_name': 'hotstar',
        'user_ids': [2, 3, 4, 5],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 3,
        'drive_name': 'microsoft',
        'user_ids': [3, 4, 6, 8],
        'date': new Date("2020-10-25")
    },
    {
        'drive_id': 4,
        'drive_name': 'amazon',
        'user_ids': [7, 9, 4],
        'date': new Date("2020-10-30")
    },
    {
        'drive_id': 5,
        'drive_name': 'redbus',
        'user_ids': [2, 5, 8, 10],
        'date': new Date("2020-09-15")
    },
])
// mentors
db.mentors.insertMany([
    {
        'mentor_id': 1,
        'mentee_ids': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    },
    {
        'mentor_id': 2,
        'mentee_ids': [1, 2, 3, 4]
    },
    {
        'mentor_id': 3,
        'mentee_ids': [1, 2, 3]
    },
    {
        'mentor_id': 4,
        'mentee_ids': [1]
    },
    {
        'mentor_id': 5,
        'mentee_ids': [1, 2, 3, 4, 5, 6, 7, 8]
    },
]);


//1. Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
        $project :{
            'topic_name': 1,
            'date': '$date',
            'month' : {
                $month: '$date'
            },
            'year': {
                $year: '$date'
            },
            
        }
    },
    {
        $match:{
            'month': 10,
            'year': 2020
        }
    },
    {
        $project:{
            'topic_name': 1,
            'date': 1
        }
    }
    
])


//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.aggregate([
    {
       $project:{
           'drive_name': '$dirve_name',
           'date': 1,
           'day': { $dayOfMonth : '$date'},
           'month': {$month : '$date'},
           'year': {$year: '$date'}
       }
    },
    {
        $match: {
            'year':{
                $eq : 2020
            },
            'month':{
                $eq : 10
            },
            'day': {
                $gte: 15,
                $lte:31
            }
        }
    },
    {
        $project: {
            'drive_name': 1,
            'date': 1
        }
    }

])


//3. Find all the company drives and students who are appeared for the placement.
db.drives.aggregate([
    {
        $lookup:{
            from:'users',
            localField:'user_ids',
            foreignField:'userdId',
            as:'res'
        }
    }
])

//4. Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    {
        $lookup:{
            from: 'users',
            localField: 'userId',
            foreignField: 'userdId',
            as: 'user_details'
        }
    },
    {
        $project: { 
            'name' : '$user_details.name',
            'problems_solved': '$problemsSolved'
        }
    }
])

//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'mentor_id',
            foreignField: 'userdId',
            as: 'mentor_details'
        }
    },
    {
        $project: {
            'mentor_name': '$mentor_details.name',
            'mentees_count': {
                $size: '$mentee_ids'
            }
        }
    },
    {
        $match: {
            'mentees_count': {
                $gte: 15
            }
        }
    }
])

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([
    {
        $lookup:{
            from: 'tasks',
            localField: 'userId',
            foreignField: 'user_id',
            as: 'userTasks'
        }
    },
    {
        $match: {
            'userTasks.submission_date': {
                $gte: ISODate("2020-10-15T00:00:00Z"),
                $lte: ISODate("2020-11-01T00:00:00Z"),
            },
            'status': 'absent'
        }
    },
    {
        $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: 'userdId',
            as: 'userDetails'

        }
    },
    {
        $project: {
            'userDetails': {
                $arrayElemAt: ["$userDetails", 0]
            },
            'taskDetails': {
                $arrayElemAt: ["$userTasks", 0]
            },
            'status': 1
        }
    },
    {
        $project: {
            'Name': "$userDetails.name",
            'Task Name': '$taskDetails.task_name',
            'status': 1,
            'Submission date': '$taskDetails.submission_date',

        }
    }
])

























