import React from 'react';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'javascript', color: 'f7df1e' },
  { name: 'react', color: '61dafb' },
  { name: 'nodedotjs', color: '339933' },
  { name: 'vuedotjs', color: '4FC08D' },
  { name: 'html5', color: 'E34F26' },
  { name: 'css3', color: '1572B6' },
  { name: 'csharp', color: '239120' },
  { name: 'dotnet', color: '512BD4' },
  { name: 'python', color: '3776AB' },
  { name: 'streamlit', color: 'FF4B4B' },
  { name: 'azuredevops', color: '0078D7' },
];

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;
`;

const SkillLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

function TechStack() {
  return (
    <TechStackContainer>
      {skills.map(skill => (
        <SkillCard key={skill.name}>
          <SkillLogo src={`https://cdn.simpleicons.org/${skill.name}/${skill.color}/ffffff`} alt={skill.name} />
          <p>{skill.name.replace('dot', '.')}</p>
        </SkillCard>
      ))}
    </TechStackContainer>
  );
}

export default TechStack;
