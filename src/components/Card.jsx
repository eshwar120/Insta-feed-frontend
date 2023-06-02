import './insta.css'


export default function Card({ item }) {
    // console.log(item);
    const id = item._id
    return <>
        <div data-testid={item.name} className="card">
            <h4>{item.name}</h4>
            <h5>{item.location}</h5>
            <svg xmlns="http://www.w3.org/2000/svg" className='menu-btn' viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <img className='post-img' src={item.postImage} alt="some image" />
            <div className='likes-container' >
                <svg xmlns="http://www.w3.org/2000/svg" className='send w-50 m-3' viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='like w-50 m-3' viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                <h6 className='date'>{item.date.slice(0, 10)}</h6>
            </div>
            <h6 className='likes'>{item.likes}Likes</h6>
            <h5 className='desc'>{item.description}</h5>
        </div>
    </>
}