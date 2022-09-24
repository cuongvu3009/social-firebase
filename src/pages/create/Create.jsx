import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

// styles
import './create.css';

export default function Create() {
  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState('');

  //	hooks
  const { documents } = useCollection('users');
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore('projects');

  //	navigate
  const navigate = useNavigate();

  //	users options
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setFormError('Please select a project category');
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError('Please assign at least 1 user for project');
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((user) => {
      return {
        displayName: user.value.displayName,
        photoURL: user.value.photoURL,
        id: user.value.id,
      };
    });

    const project = {
      name,
      details,
      assignedUsersList,
      createdBy,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
    };

    await addDocument(project);
    console.log('successfully created');
    if (!response.error) {
      navigate('/');
    }
  };

  const categories = [
    { value: 'development', label: 'Development' },
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
  ];

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input
            required
            type='date'
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>

          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>

        <button className='btn'>Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
}
