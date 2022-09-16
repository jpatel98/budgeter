import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';

function App() {
  return (
    <div className='budget'>
      <h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
    </div>
  );
}

export default App;
