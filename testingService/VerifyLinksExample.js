	WebDriver driver = new FirefoxDriver();
	driver.get("localhost:3000");
	//driver.findElement(By.linkText("Create account")).click();
	String url = driver.getCurrentUrl();
	//System.out.println(url);
	if (url.contains("wikipedia.org")){
		System.out.println("It is an Internal Link - Redirected to another page in the Same Application - Passed");
	}
	else{
		System.out.println("It is an External Link - Redirected to another page in the Other Application -Failed");
	}
	driver.navigate().back();
	driver.findElement(By.partialLinkText("seleniumhq.org")).click();
	url = driver.getCurrentUrl();

	if (! url.contains("wikipedia.org")){
		System.out.println("It is an External Link - Redirected to another page in the Other Application - Passed");
	}
	else{
		System.out.println("It is an Internal Link - Redirected to another page in the same Application - Failed");
	}
		driver.close();
