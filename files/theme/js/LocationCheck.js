    // // Function to fetch user's IP information
    // function checkLocation() {
    //     fetch('https://ipapi.co/json/')
    //         .then(response => response.json())
    //         .then(data => {
    //             const countryCode = data.country_code;
    //             const isVPN = data.org && (data.org.includes('VPN') || data.org.includes('Proxy'));

    //             // Check if the user is from Nigeria or using a VPN
    //             if (countryCode === 'NG' || isVPN) {
    //                 document.getElementById('content').style.display = 'none';
    //                 document.getElementById('not-found').style.display = 'block';
    //             } else {
    //                 document.getElementById('content').style.display = 'block';
    //                 document.getElementById('not-found').style.display = 'none';
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error fetching IP information:', error);
    //         });
    // }

    // // Run the location check on page load
    // window.onload = checkLocation;