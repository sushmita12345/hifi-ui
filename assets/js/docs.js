const links = ["install", "comp-avatar", "comp-badge", "comp-alert",
                "comp-button", "comp-card", "comp-image", "comp-input"]
const linksTag = ["install-tag", "avatar-tag", "badge-tag", "alert-tag",
                "button-tag", "card-tag", "image-tag", "input-tag"]

const binarySearch = (arr, x) => {
  
    let start=0, end=arr.length-1;

    while (start<=end){
 
        let mid=Math.floor((start + end)/2);
  
        if (mid == arr.length-1) return mid;
 
        else if (arr[mid] <= x && arr[mid+1] > x)
             return mid;
        else if (arr[mid] <= x)
            start = mid + 1;
        else
             end = mid - 1;
    }
  
    return 0;
}


document.getElementById("body").addEventListener('scroll', function(e) {
    var scrollPos = document.getElementById("body").scrollTop;

    let arr = new Array(links.length);

    for (let i = 0; i < links.length; i++) {
        
        arr[i] = document.getElementById(links[i])?.offsetTop-100;
    }
    let index = binarySearch(arr, scrollPos);
    
    for (let i = 0; i < links.length; i++) {
        if (i === index) {
            document.getElementById(linksTag[i])?.classList?.add("active");
        } else {
            document.getElementById(linksTag[i])?.classList?.remove("active");
        }
    }
});