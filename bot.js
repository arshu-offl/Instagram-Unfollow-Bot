let username = ""   //Insert your username inside the quotes   my IG : @arrsshu
let password = ""   //Insert your password inside the quotes


const {Builder, By, Key, until} = require('selenium-webdriver')

function hang(secs){
	
	secs = secs * 1000
	let now = Date.now()
    while(Date.now() < now + secs);
}



let driver = new Builder().forBrowser('firefox').build();

async function unfollow(){
	while(true){
		try{
			console.log(await driver.findElement(By.xpath("//button[contains(text(),'Following')]")))
			await driver.findElement(By.xpath("//button[contains(text(),'Following')]")).click()
			hang(1)	
			console.log(await driver.findElement(By.xpath("//button[contains(text(),'Unfollow')]")))
			await driver.findElement(By.xpath("//button[contains(text(),'Unfollow')]")).click()
			hang(2)
		}
		catch{
			return ;
		}
	}
	
}

async function example() {
  
	try{
		
		await driver.get('http://www.instagram.com/');
		await hang(4)
		console.log(username)
		await driver.findElement(By.name("username")).sendKeys(username)
		await driver.findElement(By.name("password")).sendKeys(password , Key.RETURN)
		await hang(5)
		await driver.findElement(By.xpath("//button[contains(text(),'Not Now')]")).click()
		await driver.get('http://www.instagram.com/' + username)
		
		hang(5)
		await driver.findElement(By.xpath("//a[@href='/"+username+"/following/']")).click()
		hang(2)
		
		while(true){
			await unfollow()
		}
	}
	finally{
		driver.quit()
	}
}

example()
