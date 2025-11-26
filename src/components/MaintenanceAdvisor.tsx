import React, { useState } from 'react';
import styles from '../styles/MaintenanceAdvisor.module.css';

const MaintenanceAdvisor = () => {
  const [propertyType, setPropertyType] = useState('Home');
  const [propertyAge, setPropertyAge] = useState('11-30 years');
  const [businessType, setBusinessType] = useState('Office Building');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [error, setError] = useState<string | null>(null);

  const residentialIssues = ['Flickering lights', 'Breakers trip frequently', 'Outlets are warm', 'Older home (30+)', 'Planning renovation'];
  const commercialIssues = ['Code compliance concerns', 'Insurance documentation needed', 'Sensitive equipment', 'Intermittent power issues'];

  const handleIssueToggle = (issue: string) => {
    setSelectedIssues(prev => prev.includes(issue) ? prev.filter(i => i !== issue) : [...prev, issue]);
  };

  const handleGenerateRecommendation = async () => {
    setIsLoading(true); setError(null); setRecommendation('');
    const prompt = `Act as an expert electrician. Client has a ${propertyType} (${propertyType === 'Business' ? businessType : ''}), age ${propertyAge}. Issues: ${selectedIssues.join(', ')}. Recommend a maintenance plan.`;
    
    try {
      // REPLACE WITH YOUR ACTUAL API KEY
      const apiKey = ""; 
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      if (!response.ok) throw new Error('API Error');
      const result = await response.json();
      setRecommendation(result.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.');
    } catch (err) { setError('Failed to generate. Please add your API Key in src/components/MaintenanceAdvisor.tsx'); } 
    finally { setIsLoading(false); }
  };

  return (
    <div className={styles.advisorContainer}>
      <div className={styles.formSection}>
        <h2>AI Electrical Health Advisor</h2>
        <div className={styles.formGroup}>
          <label>Property Type</label>
          <div className={styles.buttonGroup}>
            <button onClick={() => setPropertyType('Home')} className={propertyType === 'Home' ? styles.active : ''}>Home</button>
            <button onClick={() => setPropertyType('Business')} className={propertyType === 'Business' ? styles.active : ''}>Business</button>
          </div>
        </div>
        {/* Simplified form for brevity - add more fields as needed based on previous turns */}
        <div className={styles.formGroup}>
            <label>Select Issues:</label>
            <div className={styles.checkboxGrid}>
                {(propertyType === 'Home' ? residentialIssues : commercialIssues).map(issue => (
                    <div key={issue} className={styles.checkboxWrapper}>
                        <input type="checkbox" checked={selectedIssues.includes(issue)} onChange={() => handleIssueToggle(issue)} />
                        <label>{issue}</label>
                    </div>
                ))}
            </div>
        </div>
        <button onClick={handleGenerateRecommendation} disabled={isLoading} className={styles.generateButton}>
          {isLoading ? 'Analyzing...' : 'Get Recommendation'}
        </button>
      </div>
      <div className={styles.resultSection}>
        <h3>Recommendation</h3>
        {error && <p style={{color:'red'}}>{error}</p>}
        <div className={styles.recommendationResult}><pre>{recommendation}</pre></div>
      </div>
    </div>
  );
};
export default MaintenanceAdvisor;



