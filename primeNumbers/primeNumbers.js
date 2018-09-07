let flag;

for (let i = 1; i <= 100; i++) 
{
	flag = 0;
	for(let j = 2; j < i; j++)
	{
		if(i % j == 0){
			flag = 1;
		}
	}
	if(flag === 0)
	{
		console.log(i)
	}
}