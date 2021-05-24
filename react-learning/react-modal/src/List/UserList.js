
import classes from './UserList.module.css';
const List = (props) => {
	return (
		<> 
      
				<ul className={classes.content} >
          {props.values.map((value) => (
					<li className={classes.container} key={value.id}>
              {value.name} ({value.age} years old)
					</li>
          ))}
				</ul>
		

			
		</>
	);
};

export default List;
