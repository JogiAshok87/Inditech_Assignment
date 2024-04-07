import { useEffect,useState } from 'react'
import './index.css'



const Soldier = () =>{
    const [data,setData] = useState('')
    const [percentage, setPercentage] = useState({}); 
    const [achievements, setAchievements] = useState([]);
    const [battlepacksData, setBattlepacksData] = useState([]);
    
   // fetching data for user profile 
   useEffect (() =>{
    const profileData = async() =>{
        const URL = "https://backend-code-rvuz.onrender.com/user"
        const options={
            method:'GET',
        }
        try {
            const response = await fetch(URL, options);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setData(data)
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }

    }
    profileData()
   },[])
   
   // calculating user score percentages
   useEffect(() => {
    const calculatePercentage = () => {
        const newPercentage = {};
        battlepacksData.forEach(item => {
            newPercentage[item.title] = Math.floor((item.current / item.total) * 100);
        });
        setPercentage(newPercentage);
    };
    calculatePercentage();
}, [battlepacksData]);

// fetching data for achivements
useEffect(() => {
    fetch('https://backend-code-rvuz.onrender.com/achivements')
      .then(response => response.json())
      .then(data => setAchievements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // fetching data for different battelpacks
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://backend-code-rvuz.onrender.com/battlepacks');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setBattlepacksData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [battlepacksData]);

    return(
        <div className="bg-container">
            {/*user profile of gamer */}
            <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1712392229/soldier__look_sxgav6.png" alt="soldier_img" className='soldier_img'/>
            <div className='profile-and-content'>
              <div className='soldier-info'>
                <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1712392708/soldier__info_am9ahp.png" alt=""/>
                <div>
                    <h1>cookie</h1>
                    <div className='soldier-info-para'>
                    <button>{data.rank}</button>
                    <p>{data.score}/{data.totalScore} -Estimated rank up in 1h</p>
                    </div>
                </div>
               </div>
            <div className='progress-report'>
                
                {/*Battelfield scores with percentages */}
                
                <div className="progress-list">
                    {battlepacksData.map((item)=>(
                        <div key={item.title}>
                                <hr className="horizontal-line" />
                                <div className="progress-item">
                                    <h1 className="title">{item.title}</h1>
                                    <div>
                                        <div className="count">{item.current}/{item.total}</div>
                                        <div className="progress-bar">
                                            <div className="progress" style={{ width: `${percentage[item.title]}%` }}/>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                        

                    ))}
                    <hr className="horizontal-line" />
                    <p>Battlepacks</p>
                </div>
                
                {/*Battelfield acheviments */}

                <div className='acheviments-cards'>
                        <div className='acheviments'>
                            <div>
                                <p>WINS</p>
                                <h1>44%</h1>
                            </div>
                            <div>
                                <p>SCORE/MIN</p>
                                <h1>592</h1>
                            </div>
                            <div>
                                <p>KILLS/MIN</p>
                                <h1>0.60</h1>
                            </div>

                        </div>
                        
                        {/*Battelfield cards */}

                        <div className="container">
                            {achievements.map(achievement => (
                                <div key={achievement.id} className="card">
                                <div className="card-header">
                                    <h3>{achievement.tool}</h3>
                                </div>
                                <div className="card-body">
                                    <img src={achievement.image} alt={achievement.name} />
                                    <div className='card-body-description'>
                                    <h4>{achievement.name}</h4>
                                    {achievement.kills ? (
                                    <p>{achievement.kills} kills</p>
                                    ) : (
                                    <p>{achievement.score} score</p>
                                    )}
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            
            </div>
            </div>
            
            

    )
}

export default Soldier