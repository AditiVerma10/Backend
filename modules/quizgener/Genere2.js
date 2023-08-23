export const Genere2={
    Difficulty(req,res){
        const diff=req.params.level //using parameters
        console.log("currentaffairs");
        if(diff=='easy'){
            res.json({1:['Which state/UT announced a ban on production, sale and use of all types of firecrackers till January 1, 2023','Maharashtra','Delhi','Sikkim','Himachal Pradesh'],
            2:['What is ‘Garba’, which was nominated by India to be inscribed on UNESCO’s intangible cultural heritage list?','Festival','Dance Form','Art Form','Monument'],
            3:['Jhabua power plant, which was recently acquired by NTPC, is located in which state?','Rajasthan','Madhya Pradesh','Punjab','Chattisgarh'],
            4:['Which state increased reservations in government jobs for SC, ST and others to 77%? ','Chattisgarh','Jharkhand','Goa','Punjab'],
            5:['Which international association launched ‘Door Se Namaste’ Doordarshan and YouTube series?','WEF','UNICEF','World Bank','IMF'],
            "ans":[' Delhi','Dance Form','Madhya Pradesh','Jharkhand','UNICEF']})
        }
        if(diff=='medium'){
            res.json({1:['Which institution released a ‘List of Priority fungal pathogens’?','UNEP','WHO','UNFCCC','NASA'],
            2:['Who is the first Indian sportsperson to clinch the prestigious Diamond League Meet title?','PV Sindu','Kartik','Neeraj Chopra','Hima Das'],
            3:['‘Knesset’ is the parliament of which country?','Brazil','Israel','USA','India'],
            4:['Which country has recorded deaths of children by the bacterial infection ‘Strep A’?','India','UK','Germany','Pakistan'],
            5:['As per a recent UN survey, which region has the highest unemployment rate in the world?','African','Arab','South Asian','Indian'],
            "ans":['WHO','Neeraj Chopra','Israel','UK','Arab']})
        }
        if(diff=='hard'){
            res.json({1:['‘Olaf Scholz’ is the recently appointed head of which country?','India','Austria','Germany','France'],
            2:['Which is the first city in India to have a water metro project?','Kolkata','Kochi','Chennai','Mumbai'],
            3:['‘National Innovation Week’ is organised in which month in India?','Jan','Feb','March','April'],
            4:['The new COVID strain named ‘Deltacron’ was identified originally in which country?','South Africa','USA','Cyprus','Italy'],
            5:['India set a bilateral trade target of $50 billion before 2030, with which country? ','South Korea','USA','Japan','China'],
            "ans":['Germany','Kochi','Jan','Cyprus','South Korea']})
        }
    }
}