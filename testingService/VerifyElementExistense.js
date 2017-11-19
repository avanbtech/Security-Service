WebDriver driver = new ChromeDriver();
driver.get("localhost:3001");
boolean existence = driver.findElement(By.linkText("SECURITY VIEW")).isDisplayed();


if (existence == true){
	System.out.println("Security view Link Exists - Passed");
}
else {
	System.out.println("Security view Not Exists - Failed");
}


WebDriver driver = new ChromeDriver();
driver.get("localhost:3001");

try
{
	if (driver.findElement(By.linkText("FILL IN REQUEST FORM")).isDisplayed()){
		System.out.println("Security Form Link Exists - Passed");
	}
}
catch (NoSuchElementException e)
{
	System.out.println("Security Form Link Not Exists - Failed");
}

try
{
	if (driver.findElement(By.linkText("CHECK REQUEST PAGE")).isDisplayed()){
		System.out.println("check status Link Exists - Passed");
	}
}
catch (NoSuchElementException e)
{
	System.out.println("check status Link Not Exists - Failed");
}

try
{
	if (driver.findElement(By.linkText("EXPORT DATA DEMO")).isDisplayed()){
		System.out.println("export data Link Exists - Passed");
	}
}
catch (NoSuchElementException e)
{
	System.out.println("export data Link Not Exists - Failed");
}
	driver.close();
